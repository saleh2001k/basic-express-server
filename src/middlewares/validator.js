"use strict";

function validator(req, res, next) {
  const name = req.query.name;

  if (!name) {
    res.status(500).json({
      status: 500,
      message: "Please provide a name",
      error: "No name provided",
    });
  } else {
    next();
  }
}

module.exports = validator;
