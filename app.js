var expess = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('passport');
const mongoose = require('mongoose');

const app = expess();

const port = 3000;

app.listen(port, () => {
    console.log('Server started on port: ' + port);
});
