'use strict';

var Sequelize = require('sequelize');
var theUri = require('./auth/myspace.router.js');

var databaseURI = theUri;

var db = new Sequelize(databaseURI, {
  define: {
    timestamps: false,
    underscored: true
  }
});

module.exports = db;
