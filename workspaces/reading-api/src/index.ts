import { logger } from 'helpers';

import config from './config';
import app from './app';

logger.info('Ey! I\'m reading api');

const { port } = config.app;

app.listen(port, () => {
  logger.info(`App listening on port ${port}!`);
}).on('error', err => {
  if (err) {
    logger.error(err);
    return;
  }
});
