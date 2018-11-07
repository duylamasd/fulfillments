'use strict';

require('dotenv').config();

const Sequelize = require('sequelize');
const env = require('./environment');

const DIALECT = 'mysql';
const Op = Sequelize.Op;
const Transaction = Sequelize.Transaction;

/**
 * The operation aliases for Mysql queries,
 */
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
};

const commonOptions = {
  operatorsAliases: operatorsAliases,
  dialect: DIALECT,
  typeValidation: true,
  benchmark: true,
  omitNull: true,
  define: {
    underscored: false,
    freezeTableName: true,
    charset: 'utf8',
    timestamps: true
  },
  isolationLevel: Transaction.ISOLATION_LEVELS.READ_COMMITTED,
  logging: false,

};

module.exports = {
  development: Object.assign(
    {
      username: env.dbUsername,
      password: env.dbPassword,
      database: env.dbName,
      host: env.dbHost,
      port: env.dbPort
    },
    commonOptions
  ),
  test: Object.assign(
    {
      username: env.dbTestUsername,
      password: env.dbTestPassword,
      database: env.dbTestName,
      host: env.dbTestHost,
      port: env.dbTestPort,
    },
    commonOptions
  ),
  production: Object.assign(
    {
      username: env.dbProdUsername,
      password: env.dbProdPassword,
      database: env.dbProdName,
      host: env.dbProdHost,
      port: env.dbProdPort,
    },
    commonOptions
  )
};
