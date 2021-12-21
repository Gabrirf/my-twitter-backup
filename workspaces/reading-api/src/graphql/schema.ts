import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Query {
    hello: String,
    gabri: String,
    edad: Int
  }
`);

export { schema };