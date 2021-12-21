import { logger } from "helpers"
import { TwitterApi, ETwitterStreamEvent } from 'twitter-api-v2';

import { createTweet }  from './mongodb-service';

async function setStreamRules(client){

  const tweetFields = {
    'tweet.fields': ['referenced_tweets', 'author_id', 'created_at', 'public_metrics'],
    'user.fields': ['name', 'username'],
    expansions: ['author_id']
  };

  await client.v2.updateStreamRules({
    add: [{ value: 'JavaScript' }, { value: 'NodeJS' }],
  });

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
  const client = new TwitterApi(config.token);
  const stream = await setStreamRules(client);
  subscribeToStream(stream);
}

export default {
  init,
};
