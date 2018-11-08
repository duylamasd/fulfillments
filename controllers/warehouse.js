'use strict';

const BaseRouter = require('./base');
const Warehouse = require('../models').Warehouses;
const Shelf = require('../models').Shelf;

const Router = new BaseRouter(Warehouse);

Router.get(
  '/:id/shelves',
  (req, res, next) => {
    let id = req.params.id;
    Warehouse.findByPk(id, {
      include: [
        { model: Shelf, as: 'Shelves', separate: true }
      ],
    }).then(wh => {
      res.json(wh);
    }).catch(e => {
      next(e);
    });
  }
);

module.exports = Router;
