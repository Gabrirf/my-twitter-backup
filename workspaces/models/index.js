const mongoose = require('mongoose');

const Model = require('./src/model');

const { connect } = mongoose;

module.exports = {
  connect,
  Model,
};
