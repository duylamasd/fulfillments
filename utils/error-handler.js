'use strict';

const Sequelize = require('sequelize');
const HttpStatusCodes = require('http-status-codes');

/**
 * Connection error handler
 * @param {Sequelize.ConnectionError} err
 */
const connectionErrorHandler = (err) => {
  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    name: err.name,
    message: err.message,
    stack: err.stack ? err.stack : undefined
  };
}

/**
 * Database error handler
 * @param {Sequelize.DatabaseError} err
 */
const databaseErrorHandler = (err) => {
  if (err instanceof Sequelize.ExclusionConstraintError) {
    return {
      code: HttpStatusCodes.CONFLICT,
      name: err.name,
      message: err.message,
      stack: err.stack ? err.stack : undefined
    };
  }

  if (err instanceof Sequelize.ForeignKeyConstraintError) {
    return {
      code: HttpStatusCodes.BAD_REQUEST,
      name: err.name || 'FOREIGNKEY_CONSTRAINT_ERROR',
      message: err.message || 'Foreignkey constraint error',
      stack: err.stack ? err.stack : undefined
    };
  }

  if (err instanceof Sequelize.TimeoutError) {
    return {
      code: HttpStatusCodes.REQUEST_TIMEOUT,
      name: err.name || 'DB_TIMEOUT_ERROR',
      message: err.message || 'Database timeout error',
      stack: err.stack ? err.stack : undefined
    };
  }

  return {
    code: HttpStatusCodes.INTERNAL_SERVER_ERROR,
    name: err.name || 'DATABASE_ERROR',
    message: err.message || 'Database error',
    stack: err.stack ? err.stack : undefined
  };
}

/**
 * Validation error handler
 * @param {Sequelize.ValidationError} err
 */
const validationErrorHandler = (err) => {
  if (err instanceof Sequelize.UniqueConstraintError) {
    return {
      code: HttpStatusCodes.CONFLICT,
      name: err.name,
      message: err.message,
      stack: err.stack ? err.stack : undefined,
      errors: err.errors
    };
  }

  return {
    code: HttpStatusCodes.BAD_REQUEST,
    name: err.name || 'VALIDATION_FAILED',
    message: err.message || 'Validation failed',
    stack: err.stack ? err.stack : undefined,
    errors: err.errors || []
  };
}

/**
 * App errors handler
 * @param {Error} err The error info
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 */
module.exports = async (err, req, res, next) => {
  // Connection error handler
  if (err instanceof Sequelize.ConnectionError) {
    let responseBody = connectionErrorHandler(err);
    return res.status(responseBody.code).json(responseBody);
  }

  // Database error handler
  if (err instanceof Sequelize.DatabaseError) {
    let responseBody = databaseErrorHandler(err);
    return res.status(responseBody.code).json(responseBody);
  }

  // Validation error handler
  if (err instanceof Sequelize.ValidationError) {
    let responseBody = validationErrorHandler(err);
    return res.status(responseBody.code).json(responseBody);
  }

  // Uncaught error
  return res.status(err.code || HttpStatusCodes.INTERNAL_SERVER_ERROR).json(err || {});
};
