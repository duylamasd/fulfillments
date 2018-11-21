'use strict';

const { checkSchema } = require('express-validator/check');
const { BaseRouter } = require('../utils');
const Shelf = require('../models').Shelf;

const validator = checkSchema({
  whId: {
    in: 'body',
    exists: {
      errorMessage: 'whId is required'
    },
    isUUID: {
      errorMessage: 'whId must be an UUID'
    }
  }
});

const Router = new BaseRouter(Shelf, validator);

module.exports = Router;
