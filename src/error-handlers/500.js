function errorHandler(err, req, res, next) {
  console.error(err);
  res.status(500).send('500 - Server Error');
}

module.exports = errorHandler;