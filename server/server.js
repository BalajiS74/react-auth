const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors(
  {
    origin: 'https://react-auth-frontend-one.vercel.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
  }
)); 

const authRouter = require('./routes/authRouter');  
const { connectToMongoDB } = require('./config/mongoDb');
// Load environment variables from .env file
require('dotenv').config();
// Connect to MongoDB   
connectToMongoDB().catch(err => console.error('MongoDB connection error:', err));
// Middleware to parse JSON requests
app.use(express.json());
// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Use the authRouter for authentication routes
app.use('/api/auth', authRouter);

// Set up a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello, World!');
}); 

const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
