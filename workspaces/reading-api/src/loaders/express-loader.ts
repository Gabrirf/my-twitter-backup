import { graphqlHTTP } from 'express-graphql';

import { schema } from '../graphql';
import { graphqlController } from '../controllers';

function initExpress(expressApp) {
  expressApp.use('/graphql', graphqlHTTP({
      schema: schema,
      rootValue: graphqlController,
      graphiql: true,
    }),
  );
  expressApp.use((req, res) => res.status(404).send({ message: 'Not Found' }));
}

export default initExpress;