'use strict';

const express = require('express');
const Router = express.Router();
const Shelf = require('../models').Shelf;

Router.get(
  '/',
  (req, res, next) => {
    Shelf.findAll({}).then(whs => {
      res.json(whs);
    }).catch(e => {
      next(e);
    });
  }
);

Router.post(
  '/',
  (req, res, next) => {
    Shelf.create(req.body).then(s => {
      res.json(s)
    }).catch(e => {
      next(e);
    });
  }
);

module.exports = Router;
