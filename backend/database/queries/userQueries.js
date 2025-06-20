const User = require('../models/User');

// Fetch user by username
async function getUserByUsername(username) {
    return await User.findOne({ where: { username } });
}

module.exports = { getUserByUsername };
