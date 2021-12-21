import { logger } from "helpers"
import { TwitterApi, ETwitterStreamEvent } from 'twitter-api-v2';

import { createTweet }  from './mongodb-service';

//let client;
let token;
async function init(config) {
  token = config.token;
  //client = new TwitterApi(config.token);
}

async function subscribeToStream(rules){
  const client = new TwitterApi(token);

  const tweetFields: any = {
    'tweet.fields': ['referenced_tweets', 'author_id', 'created_at', 'public_metrics'],
    'user.fields': ['name', 'username'],
    expansions: ['author_id']
  };

  await client.v2.updateStreamRules({
    add: rules.map(rule => ({ value: rule })),
  });

  const stream = await client.v2.searchStream(tweetFields);

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

export default {
  init,
  subscribeToStream,
};
