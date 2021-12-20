const logger = require('./src/logger/winston');
const { cutPathFromFolder } = require('./src/utils/stack-info');

module.exports = {
  logger,
  cutPathFromFolder,
};
