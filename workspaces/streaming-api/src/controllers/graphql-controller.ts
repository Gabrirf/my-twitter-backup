import { logger } from 'helpers';

import { twitterService }  from '../services';

function subscribeToTweet(args){
  twitterService.addRuleToStream([args.rule]);
  return `Subscribed to ${args.rule}`;
}

export default { 
  subscribeToTweet,
};