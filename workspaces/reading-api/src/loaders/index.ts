import mongodbLoader from "./mongodb-loader";

function init(config){
  mongodbLoader(config.mongodb);
}

export default {
  init,
};
