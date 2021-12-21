import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello(name: String): String,
    gabri: String,
    edad: Int
  }
`);

export { schema };