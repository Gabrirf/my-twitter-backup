const { Schema, model } = require('mongoose');

const { cleanObject } = require('./utils/format');

const tweetSchema = new Schema({
  twitterId: String,
  user: String,
  username: String,
  text: String,
  createdAt: Date,
  retweet: Number,
  like: Number,
});

tweetSchema.method('toJSON', cleanObject);

module.exports = model('user', tweetSchema);
