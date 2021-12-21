import { buildSchema } from 'graphql';

const schema = buildSchema(`

  type Tweet {
    twitterId: String,
    user: String,
    username: String,
    text: String,
    createdAt: String,
    retweets: Int,
    likes: Int,
  }

  type Query {
    tweets(contains: String, username: String, offset: Int, limit: Int, sort: String): [Tweet]
  }
`);

export { schema };