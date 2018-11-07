'use strict';

require('dotenv').config();

const cookieParser = require('cookie-parser');
const compression = require('compression');
const express = require('express');
const HttpStatusCodes = require('http-status-codes');

const env = require('./config/environment');
const models = require('./models');
const {
  WarehouseController,
  ShelfController
} = require('./controllers');
const { ErrorHandler } = require('./utils');

const app = express();

models.sequelize.authenticate().then(() => {
  app.listen(env.port, () => {
    console.log('App started');
  });
}).catch(e => {
  console.log(e);
  process.exit(1);
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get('/', (req, res, next) => {
  res.send('OK');
});

app.use('/warehouses', WarehouseController);
app.use('/shelves', ShelfController);

app.use(ErrorHandler);
