'use strict'
var Sequelize = require('sequelize')
var db = require('../index.js')
const DataTypes = db.Sequelize;
module.exports = db.define('campuses', {
  name: Sequelize.STRING,
  image: Sequelize.STRING
}
)