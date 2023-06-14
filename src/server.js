'use strict';

const express = require('express');
const logger = require('./middlewares/logger');
const validator = require('./middlewares/validator');
const notFoundHandler = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');


const app = express();
app.use(logger);

const cors = require('cors');
app.use(cors());

    
// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the server!');
});

app.get('/person', validator, (req, res) => {
  const name = req.query.name;
  res.json({ name });
});

// Error handlers
app.use('*', notFoundHandler);
app.use(errorHandler);

module.exports = {
  start: (port) => {
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  },
  app
};
