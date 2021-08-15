"use strict";

module.exports = (error, req, res, next) => {
  res.status(500).send({
    error: 505,
    route: req.originalUrl,
    message: `something went wrong, ${error}`,
  });
};
