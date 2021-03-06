const { Schema, model } = require('mongoose');

const { cleanObject } = require('./utils/format');

const tweetSchema = new Schema({
  twitterId: String,
  user: String,
  username: String,
  text: String,
  createdAt: Date,
  retweets: Number,
  likes: Number,
});

tweetSchema.method('toJSON', cleanObject);

module.exports = model('tweets', tweetSchema);
