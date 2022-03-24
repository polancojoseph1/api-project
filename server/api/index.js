const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const serveStatic = require('serve-static');
module.exports = app;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

const router = require('./routes');

app.use('/', serveStatic ( path.join(__dirname, '/index.html' ) ) );

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

app.use(express.json());
app.use('/api', router);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!');
})