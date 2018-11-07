'use strict';

module.exports = {
  dbUsername: process.env.DB_USERNAME,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbHost: process.env.DB_HOST,
  dbPort: process.env.DB_PORT,
  dbTestUsername: process.env.DB_TEST_USERNAME,
  dbTestPassword: process.env.DB_TEST_PASSWORD,
  dbTestName: process.env.DB_TEST_NAME,
  dbTestHost: process.env.DB_TEST_HOST,
  dbTestPort: process.env.DB_TEST_PORT,
  dbProdUsername: process.env.DB_PROD_USERNAME,
  dbProdPassword: process.env.DB_PROD_PASSWORD,
  dbProdName: process.env.DB_PROD_NAME,
  dbProdHost: process.env.DB_PROD_HOST,
  dbProdPort: process.env.DB_PROD_PORT,
  port: process.env.PORT,
  host: process.env.HOST
};
