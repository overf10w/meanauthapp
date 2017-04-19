var expess = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');

const app = expess();

const users = require('./routes/users');

const port = 3000;

// CORS MW
app.use(cors());

// Body parser MW
app.use(bodyParser.json());

app.use('/users', users);

// Index route
app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

// Start server
app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
