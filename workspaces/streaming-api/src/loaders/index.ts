import twitterLoader from "./twitter-loader";

function init(config){
  twitterLoader(config.twitter);
}

export default {
  init,
};
