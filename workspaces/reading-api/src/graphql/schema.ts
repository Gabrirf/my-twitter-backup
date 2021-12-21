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
    hello(name: String): String,
    tweets: [Tweet]
  }
`);

export { schema };