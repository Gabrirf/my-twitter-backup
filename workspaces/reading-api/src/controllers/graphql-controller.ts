import { logger } from 'helpers';

function hello(args) {
  logger.info(args.name);
  const name = args.name || 'world';
  return `Hello ${name}!`;
}

function bye(){
  return 'Bye bye my world!';
}

export default { 
  hello,
  bye,
};