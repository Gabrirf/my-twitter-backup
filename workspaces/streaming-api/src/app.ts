import * as express from 'express';

import config from './config';
import loaders from './loaders';

const app = express();

loaders.init(app, config);

export default app;
