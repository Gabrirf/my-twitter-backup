import { logger } from 'helpers';

import config from './config';
import loaders from './loaders';

logger.info('Ey! I\'m reading api');

loaders.init(config);
