const mongoose = require('mongoose');
require('dotenv').config(); 

const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/testdb';

const connectToMongoDB = async () => {
    try {
        await mongoose.connect(mongoURI); // ✅ No deprecated options
        console.log('✅ Connected to MongoDB successfully');
    } catch (error) {
        console.error('❌ Error connecting to MongoDB:', error);
    }
};

module.exports = {
    connectToMongoDB,
    mongoURI
};
