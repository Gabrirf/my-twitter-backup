import { logger } from "helpers"


function init(config){
  logger.info(config.token);
}

export default {
  init,
};
