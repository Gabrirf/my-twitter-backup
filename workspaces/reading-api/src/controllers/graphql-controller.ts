import { logger } from 'helpers';

function hello(args) {
  logger.info(args.name);
  const name = args.name || 'world';
  return `Hello ${name}!`;
}

function bye(){
  return 'Bye bye my world!';
}

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
  hello,
  bye,
  tweets,
};