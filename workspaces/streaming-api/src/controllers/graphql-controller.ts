import { logger } from 'helpers';

import { twitterService }  from '../services';

async function subscribeToTweet(args){
  logger.debug(JSON.stringify(args));
  return args.rule;
}

export default { 
  subscribeToTweet,
};