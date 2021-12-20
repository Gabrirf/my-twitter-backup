import { connect } from 'models';
import { logger } from 'helpers';

async function initDatabase(config) {
  try {
    await connect(config.uri, config.options);
    logger.info(`🐵 Mongodb ready at ${config.uri}`);
  } catch (error) {
    logger.error(`Couldn't connect to MongoDB at ${config.uri}`);
    throw error;
  }
}

export default initDatabase;
