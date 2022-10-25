const express = require('express');
const path = require('path');
const userRouter = require('./routers/userRouter');
const photosRouter = require('./routers/photosRouter');

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

app.use('/user', userRouter); // for photographers (if we want client logins, we will need a client route)
app.use('/photos', photosRouter); // for photos 

/**
 * Handle faulty requests
 */
app.use('/', (req, res) => {
  return res.send(404);
})

/**
 * Global error handler
 */

 app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  }
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
})


/**
 * shh, I'm listening to port 3000
 */
app.listen(3000);

module.exports = app;