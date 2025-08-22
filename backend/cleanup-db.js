const mongoose = require('mongoose');
require('dotenv').config();

async function cleanupDatabase() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');
    
    // Drop the users collection to reset it
    const db = mongoose.connection.db;
    try {
      await db.collection('users').drop();
      console.log('Users collection dropped');
    } catch (err) {
      console.log('Users collection does not exist, skipping drop');
    }
    
    console.log('Database cleanup complete');
    process.exit(0);
  } catch (error) {
    console.error('Cleanup error:', error);
    process.exit(1);
  }
}

cleanupDatabase();
