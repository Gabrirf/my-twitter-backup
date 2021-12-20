const mongoose = require('mongoose');

const Model = require('./src/Model');

mongoose.set('useCreateIndex', true);
const { connect } = mongoose;

module.exports = {
  connect,
  Model,
};
