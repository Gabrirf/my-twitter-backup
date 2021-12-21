import { logger } from 'helpers';

import { getTweetList } from '../services/mongodb-service'

async function tweets(args){
  logger.info(Object.entries(args));
  const tweetList = await getTweetList({});
  return tweetList;
}

export default { 
  tweets,
};