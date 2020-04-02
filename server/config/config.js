const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  "development": {
    "username": "parasite",
    "password": process.env.DB_PASSWORD,
    "database": "parasitagram",
    "host": "13.209.6.153",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "test": {
    "username": "parasite",
    "password": process.env.DB_PASSWORD,
    "database": "parasitagram",
    "host": "13.209.6.153",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "parasite",
    "password": process.env.DB_PASSWORD,
    "database": "parasitagram",
    "host": "13.209.6.153",
    "dialect": "mysql",
    "operatorsAliases": false
  }
};