import { Tweet } from 'models';
import { logger } from 'helpers';

function createTweet(tweet){

  const dataToStore = {
    twitterId: tweet.data.id,
    user: tweet.includes.users[0].name,
    username: tweet.includes.users[0].username,
    text: tweet.data.text,
    createdAt: tweet.data.created_at,
    retweets: tweet.data.public_metrics.retweet_count,
    likes: tweet.data.public_metrics.like_count,
  };

  logger.debug(JSON.stringify(dataToStore, null, 2));

  new Tweet(dataToStore).save();
}

function getTweetList(filters, offset, limit, sort){
  return Tweet.find(filters).skip(offset).limit(limit).sort({ [sort]: -1 });
}

export { createTweet, getTweetList };