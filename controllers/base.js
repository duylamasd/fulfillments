'use strict';

const async = require('async');
const express = require('express');
const { validationResult } = require('express-validator/check');
const HttpStatusCodes = require('http-status-codes');

/**
 * Create GET method
 */
function createGetMethod() {
  this.get(
    '/',
    (req, res, next) => {
      this.model.findAll(req.body).then(result => {
        res.json(result);
      }).catch(e => {
        next(e);
      });
    }
  );
}

/**
 * Create POST method
 */
function createPostMethod() {
  this.post(
    '/',
    this.validator,
    (req, res, next) => {
      async.waterfall([
        // Validate request body
        done => {
          if (!this.validator) { return done(); }
          let errors = validationResult(req);
          if (!errors.isEmpty()) {
            return done({
              code: HttpStatusCodes.BAD_REQUEST,
              message: 'Invalid request body schema',
              errors: errors.array()
            });
          }

          return done();
        },
        // Create new record
        done => {
          this.model.create(req.body).then(result => {
            done(undefined, result);
          }).catch(e => {
            done(e);
          });
        }
      ], (err, result) => {
        if (err) { return next(err); }
        return res.json(result);
      });
    }
  );
}

/**
 * Create GET method with Id
 */
function createGetMethodWithId() {
  this.get(
    '/:id',
    (req, res, next) => {
      let id = req.params.id;
      this.model.findOne(
        { where: { id: id } }
      ).then(result => {
        if (!result) {
          return next({
            code: HttpStatusCodes.NOT_FOUND,
            message: `No record has id ${id}`,
            data: { id: id }
          });
        }

        return res.json(result);
      }).catch(e => {
        next(e);
      });
    }
  );
}

/**
 * Create PUT method to update
 */
function createPutMethod() {
  this.put(
    '/:id',
    (req, res, next) => {
      let id = req.params.id;
      this.model.update(
        req.body,
        { where: { id: id } }
      ).then(result => {
        res.json(result);
      }).catch(e => {
        next(e);
      });
    }
  );
}

/**
 * Create delete method by id
 */
function createDeleteMethod() {
  this.delete(
    '/:id',
    (req, res, next) => {
      let id = req.params.id;
      this.model.destroy({
        where: { id: id }
      }).then(result => {
        res.json(result);
      }).catch(e => {
        next(e);
      });
    }
  )
}

/**
 * Base router
 */
class BaseRouter extends express.Router {
  constructor(model, validator, options) {
    super(options);
    this.model = model;
    this.validator = validator || ((req, res, next) => {
      next();
    });
    createGetMethod.bind(this)();
    createPostMethod.bind(this)();
    createGetMethodWithId.bind(this)();
    createPutMethod.bind(this)();
    createDeleteMethod.bind(this)();
  }
};

module.exports = BaseRouter;
