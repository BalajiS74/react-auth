const {Auth}  = require('../models/authModels');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing
// Function to handle user registration
const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const newUser = new Auth({ username, email, password });

        const existingUser = await Auth.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }    
        // encrypt password here if needed
        const existingEmail = await Auth.findOne({ email });
        if (existingEmail) {
            return res.status(400).json({ error: 'Email already exists' });
        }
        // Save the new user to the database
        // You might want to hash the password before saving it
        // For simplicity, we are saving it as plain text here, but you should use a library like bcrypt to hash passwords
        newUser.password = await bcrypt.hash(password, 10); // Hash the password with bcrypt
        // Save the user to the database    
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await Auth.findOne({ email });
        if (!user) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ error: 'Error logging in user' });
    }
};

module.exports = {
    registerUser,
    loginUser
};