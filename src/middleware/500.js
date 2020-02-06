/**
 * 500 Middleware
 * @module middleware/500
 */

/**
 * Sends a JSON Formatted 404 Response
 * @param err {string} Error Text
 * @param req {object} Express Request Object
 * @param res {object} Express Response Object
 * @param next {function} Express middleware next()
 */
// eslint-disable-next-line no-unused-vars
module.exports = (err, req, res, next) => {
  let error = { error: err };
  res.status(500).json(error).end();
};