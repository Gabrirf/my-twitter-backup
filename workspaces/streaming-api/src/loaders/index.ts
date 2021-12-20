import twitterLoader from "./twitter-loader";
import mongodbLoader from "./mongodb-loader";

function init(config){
  twitterLoader(config.twitter);
  mongodbLoader(config.mongodb);
}

export default {
  init,
};
