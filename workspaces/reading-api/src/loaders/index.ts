import expressLoader from "./express-loader";
import mongodbLoader from "./mongodb-loader";

function init(app, config){
  expressLoader(app);
  mongodbLoader(config.mongodb);
}

export default {
  init,
};
