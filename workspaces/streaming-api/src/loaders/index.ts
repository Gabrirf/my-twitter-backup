import expressLoader from "./express-loader";
import twitterLoader from "./twitter-loader";
import mongodbLoader from "./mongodb-loader";

function init(app, config){
  expressLoader(app);
  // twitterLoader(config.twitter);
  mongodbLoader(config.mongodb);
}

export default {
  init,
};
