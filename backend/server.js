
const express = require('express');
const app = express();
app.use(express.json());  // This is for parsing incoming JSON data

// Hardcoded users
const users = [
    { id: 1, username: 'employee1', password: 'employee123', role: 'employee' },
    { id: 2, username: 'admin1', password: 'admin123', role: 'admin' }
];

// Login route
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Find the user in the hardcoded data
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // Send the user data back as response (simulating successful login)
        res.json({
            message: 'Login successful!',
            user: {
                id: user.id,
                username: user.username,
                role: user.role
            }
        });
    } else {
        res.status(401).json({ message: 'Invalid username or password' });
    }
});

// Start the server
app.listen(5000, () => {
    console.log('Server running on port 5000');
});
