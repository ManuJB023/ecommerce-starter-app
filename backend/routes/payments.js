const express = require('express');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { authenticate } = require('../middleware/auth');
const Order = require('../models/Order');
const Product = require('../models/Product');

const router = express.Router();

// Create payment intent
router.post('/create-payment-intent', authenticate, async (req, res) => {
  try {
    const { items, shippingAddress } = req.body;
    
    // Calculate total amount
    let totalAmount = 0;
    const orderItems = [];
    
    for (const item of items) {
      const product = await Product.findById(item.productId);
      if (!product || product.inventory < item.quantity) {
        return res.status(400).json({ 
          message: `Insufficient inventory for product: ${product?.name || 'Unknown'}` 
        });
      }
      
      const itemTotal = product.price * item.quantity;
      totalAmount += itemTotal;
      
      orderItems.push({
        product: product._id,
        quantity: item.quantity,
        price: product.price
      });
    }

    // Create payment intent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: Math.round(totalAmount * 100), // Convert to cents
      currency: 'usd',
      metadata: {
        userId: req.userId.toString(),
        items: JSON.stringify(items)
      }
    });

    // Create order
    const order = new Order({
      user: req.userId,
      items: orderItems,
      totalAmount,
      paymentIntentId: paymentIntent.id,
      shippingAddress,
      status: 'pending'
    });
    
    await order.save();

    res.json({
      clientSecret: paymentIntent.client_secret,
      orderId: order._id
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
});

// Stripe webhook
router.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
  }

  if (event.type === 'payment_intent.succeeded') {
    const paymentIntent = event.data.object;
    
    try {
      // Update order status
      const order = await Order.findOne({ paymentIntentId: paymentIntent.id });
      if (order) {
        order.status = 'processing';
        await order.save();
        
        // Update inventory
        for (const item of order.items) {
          await Product.findByIdAndUpdate(
            item.product,
            { $inc: { inventory: -item.quantity } }
          );
        }
      }
    } catch (error) {
      console.error('Error processing successful payment:', error);
    }
  }

  res.json({ received: true });
});

module.exports = router;