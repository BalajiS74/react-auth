const authController = require('../controllers/authController');
const express = require('express'); 
const router = express.Router();
// Route for user registration
router.post('/register', authController.registerUser);
// Route for user login
router.post('/login', authController.loginUser);
// Export the router
module.exports = router;