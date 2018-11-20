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
    '/all',
    (req, res, next) => {
      let isCounting = req.query['$count'];
      let [offset, limit] = [parseInt(req.query['$offset']), parseInt(req.query['$limit'])];
      let query = req.query['$filter'] || {};

      if (offset && isNaN(offset)) {
        return next({
          code: HttpStatusCodes.BAD_REQUEST,
          message: 'offset is not a number',
          offset: offset
        });
      }

      if (limit && isNaN(limit)) {
        return next({
          code: HttpStatusCodes.BAD_REQUEST,
          message: 'limit is not a number',
          limit: limit
        });
      }

      if (isCounting) {
        this.model.count({
          where: query
        }).then(total => {
          res.json({ total: total });
        }).catch(e => {
          next(e);
        });
      } else if (offset && limit) {
        this.model.findAll({
          where: query,
          offset: offset,
          limit: limit
        }).then(rows => {
          if (!rows || rows.length === 0) {
            return next({
              code: HttpStatusCodes.NOT_FOUND,
              message: 'No record found',
              query: query
            });
          }

          return res.json(rows);
        }).catch(e => {
          next(e);
        });
      } else {
        this.model.findAll({
          where: query
        }).then(rows => {
          if (!rows || rows.length === 0) {
            return next({
              code: HttpStatusCodes.NOT_FOUND,
              message: 'No record found',
              query: query
            });
          }

          return res.json(rows);
        }).catch(e => {
          next(e);
        });
      }
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
