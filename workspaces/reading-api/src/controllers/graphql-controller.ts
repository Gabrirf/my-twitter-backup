import { logger } from 'helpers';

function tweets(args){
  logger.info(Object.entries(args));
  const tweetList = [{
    twitterId: '1',
    user: 'John Doe',
    username: '@johndoe',
    text: 'Test',
    createdAt: '2021-12-21T00:00:00Z',
    retweets: 0,
    likes: 0,
  }]
  return tweetList;
}

export default { 
  tweets,
};