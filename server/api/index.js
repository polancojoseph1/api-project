const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const serveStatic = require('serve-static');
const bodyParser = require('body-parser');
const jwt = require('./helper/jwt');
const errorHandler = require('./helper/errorHandler');
module.exports = app;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

// use JWT auth to secure the api
app.use(jwt());

// api routes
app.use('/api', require('./routes'));
app.use('/auth', require('./auth/users.controller'));

// Serving static HTML file
app.use('/', serveStatic ( path.join(__dirname, '/index.html' ) ) );

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

// Global error handler
app.use(errorHandler);

// Listening on designated port
app.listen(port, () => {
  console.log(`listening on port ${port}`);
})