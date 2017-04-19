const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/database'); // 2:22

// User Schema
const UserSchema = mongoose.Schema({
    // doesn't have to be required
    name: { 
        type: String 
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByID = function(id, callback) {
    User.findById(id, callback);
};

module.exports.getUserByUsername = function(id, callback) {
    const query = { username: username };
    User.findOne(query, callback);
};


