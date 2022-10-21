const express = require('express');
const path = require('path');

// create your express object
const app = express();

/**
 * Handle parsing request body
 */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/**
 * Static file requests
 */
app.use('/build', express.static(path.join(__dirname, '../client/build')));
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

/**
 * Define Route Handlers
 */




/**
 * shh, I'm listening to port 3000
 */
app.listen(3000);

module.exports = app;