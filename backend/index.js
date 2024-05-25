const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const RegisterModel = require('./Models/Register');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = 'your_jwt_secret_key';

mongoose.connect('mongodb://localhost:27017/GOJO-Shop', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

// Signup Route
app.post('/signup', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    try {
        const existingUser = await RegisterModel.findOne({ email });
        if (existingUser) {
            return res.json({ message: 'Already have an account' });
        }
        if (password !== confirmpassword) {
            return res.json({ message: 'Passwords do not match' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await RegisterModel.create({ name, email, password: hashedPassword });
        res.json({ message: 'User created successfully', user });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login Route
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await RegisterModel.findOne({ email });
        if (!user) {
            return res.status(400).json('User not found');
        }
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json('Incorrect password');
        }
        const payload = { id: user.id, name: user.name };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
        res.json({ token, redirect: '/userdata' });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Middleware to protect routes
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json('Unauthorized');
    }
};

// Logout Route (optional, as JWT tokens are stateless)
app.post('/logout', authMiddleware, (req, res) => {
    // For JWT, logging out can be handled by frontend by simply deleting the token.
    res.json('Logged out successfully');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
