import { logger } from 'helpers';

import { getTweetList } from '../services/mongodb-service'

async function tweets(args){

  const { contains, offset = 0, limit = 2, sort = 'createdAt' } = args;

  const filters = {
    text: { $regex: new RegExp(contains || '.*', 'i') },
  };

  const tweetList = await getTweetList(filters, offset, limit, sort);
  return tweetList;
}

export default { 
  tweets,
};