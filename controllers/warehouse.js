'use strict';

const express = require('express');
const Router = express.Router();
const Warehouse = require('../models').Warehouses;
const Shelf = require('../models').Shelf;

Router.get(
  '/',
  (req, res, next) => {
    Warehouse.findAll({}).then(whs => {
      res.json(whs);
    }).catch(e => {
      next(e);
    });
  }
);

Router.post(
  '/',
  (req, res, next) => {
    Warehouse.create({}).then(wh => {
      res.json(wh);
    }).catch(e => {
      next(e);
    });
  }
);

Router.get(
  '/:id/shelves',
  (req, res, next) => {
    let id = req.params.id;
    Warehouse.findByPk(id, {
      include: [
        { model: Shelf, as: 'Shelves' }
      ]
    }).then(wh => {
      res.json(wh);
    }).catch(e => {
      next(e);
    });
  }
);

module.exports = Router;
