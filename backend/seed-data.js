const mongoose = require('mongoose');
const Product = require('./models/Product');
require('dotenv').config();

const sampleProducts = [
  {
    name: "Premium Wireless Headphones",
    description: "High-quality wireless headphones with active noise cancellation and 30-hour battery life",
    price: 299.99,
    category: "electronics",
    inventory: 25,
    images: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500"],
    isActive: true
  },
  {
    name: "Smart Fitness Watch",
    description: "Advanced fitness tracking with heart rate monitor, GPS, and sleep tracking",
    price: 199.99,
    category: "electronics", 
    inventory: 40,
    images: ["https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"],
    isActive: true
  },
  {
    name: "Organic Coffee Beans",
    description: "Premium single-origin organic coffee beans, medium roast",
    price: 24.99,
    category: "food",
    inventory: 100,
    images: ["https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=500"],
    isActive: true
  },
  {
    name: "Eco-Friendly Water Bottle",
    description: "Stainless steel insulated water bottle, keeps drinks cold for 24 hours",
    price: 34.99,
    category: "lifestyle",
    inventory: 60,
    images: ["https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500"],
    isActive: true
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Clear existing products
    await Product.deleteMany({});
    console.log('Cleared existing products');
    
    // Add sample products
    await Product.insertMany(sampleProducts);
    console.log('Added sample products');
    
    console.log('Database seeding complete!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
}

seedDatabase();
