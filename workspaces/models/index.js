const mongoose = require('mongoose');

const Model = require('./src/tweet');

const { connect } = mongoose;

module.exports = {
  connect,
  Model,
};
