import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    subscribeToTweet(rule: String!): String,
  }
`);

export { schema };