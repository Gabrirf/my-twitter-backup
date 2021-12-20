const { Schema, model } = require('mongoose');

const { cleanObject } = require('./utils/format');

const modelSchema = new Schema({
  // TODO
});

modelSchema.method('toJSON', cleanObject);

module.exports = model('user', modelSchema);
