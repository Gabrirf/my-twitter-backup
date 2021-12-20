import { logger } from 'helpers';

import config from './config';
import loaders from './loaders';

logger.info('Ey! I\'m streaming api');

loaders.init(config);
