const connection = require('../config/dbConfig');

const loginUser = (req, res) => {
    const { username, password } = req.body;

    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
    connection.query(query, [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ message: 'Database error' });
        }

        if (results.length > 0) {
            const user = results[0];
            res.json({
                message: 'Login successful!',
                user: {
                    id: user.id,
                    username: user.username,
                    role: user.role,
                },
            });
        } else {
            res.status(401).json({ message: 'Invalid username or password' });
        }
    });
};

module.exports = { loginUser };
