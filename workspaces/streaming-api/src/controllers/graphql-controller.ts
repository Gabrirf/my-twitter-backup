import { logger } from 'helpers';

import { twitterService }  from '../services';

async function subscribeToTweet(args){
  try{ 
    await twitterService.subscribeToStream([args.rule]);
    return `Subscribed to ${args.rule}`;
  }catch(err){
    logger.warn(err);
    return 'Wait a moment, please...';
  }
}

export default { 
  subscribeToTweet,
};