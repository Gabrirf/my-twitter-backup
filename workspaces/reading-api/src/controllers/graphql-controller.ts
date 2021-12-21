import { logger } from 'helpers';

import { getTweetList } from '../services/mongodb-service'

async function tweets(args){

  const {
    sort = 'createdAt',
    offset = 0,
    limit = 10,
    contains,
    username,
  } = args;

  const filters = {
    text: { $regex: new RegExp(contains || '.*', 'i') },
    username,
  };

  Object.keys(filters).forEach(key => filters[key] === undefined && delete filters[key]);

  const tweetList = await getTweetList(filters, offset, limit, sort);
  return tweetList;
}

export default { 
  tweets,
};