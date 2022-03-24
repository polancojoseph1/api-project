const express = require('express');
const app = express();
const port = 5000;
module.exports = app;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
})

const router = require('./routes');

app.use(express.json());
app.use('/api', router);

app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!');
})