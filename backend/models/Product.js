const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  images: [String],
  category: { type: String, required: true },
  inventory: { type: Number, required: true, default: 0 },
  stripeProductId: String,
  stripePriceId: String,
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);