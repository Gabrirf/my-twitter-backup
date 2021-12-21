import { logger } from "helpers"
import { TwitterApi, ETwitterStreamEvent } from 'twitter-api-v2';

import { createTweet }  from './mongodb-service';

let client;

async function initClient(token){
  client = new TwitterApi(token);

  const tweetFields: any = {
    'tweet.fields': ['referenced_tweets', 'author_id', 'created_at', 'public_metrics'],
    'user.fields': ['name', 'username'],
    expansions: ['author_id']
  };

  return client.v2.searchStream(tweetFields);
}

function subscribeToStream(stream){
  stream.autoReconnect = true;

  stream.on(ETwitterStreamEvent.Data, async tweet => {
    const isARt = tweet.data.referenced_tweets?.some(tweet => tweet.type === 'retweeted') ?? false;
    if (isARt) {
      return;
    }
    logger.info(JSON.stringify(tweet, null, 2));
    createTweet(tweet);
  });
}

async function init(config) {
  const stream = await initClient(config.token);
  subscribeToStream(stream);
}

function addRuleToStream(rules){
  logger.info(`Subscribed to ${rules}`);
  return client.v2.updateStreamRules({
    add: rules.map(rule => ({ value: rule })),
  });
}

export default {
  init,
  initClient,
  addRuleToStream,
  subscribeToStream,
};
