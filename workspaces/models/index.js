const mongoose = require('mongoose');

const Tweet = require('./src/tweet');

const { connect } = mongoose;

module.exports = {
  connect,
  Tweet,
};
