'use strict';

const sequelize = require('sequelize');
const { BaseRouter } = require('../utils');
const Warehouse = require('../models').Warehouses;
const Shelf = require('../models').Shelf;

const Router = new BaseRouter(Warehouse);

Router.get(
  '/:id/shelves',
  (req, res, next) => {
    let id = req.params.id;
    Warehouse.findAll({
      attributes: [
        'id',
        [sequelize.col('Shelves.id'), 'shelfId']
      ],
      where: { id: id },
      include: [
        {
          model: Shelf,
          as: 'Shelves',
          required: false,
          attributes: [],
          duplicating: false,
          distinct: true
        }
      ],
      raw: true
      // group: ['id']
    }).then(wh => {
      res.json(wh);
    }).catch(e => {
      next(e);
    });
  }
);

module.exports = Router;
