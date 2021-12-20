import * as dotenv from 'dotenv';
dotenv.config();

const twitter = {
  token: process.env.BEARER_TOKEN,
}

const db = {
  host: process.env.DATABASE_HOST,
  name: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  pass: process.env.DATABASE_PASS,
  stringOptions: process.env.DATABASE_STRING_OPTIONS || '',
};

const mongodb = {
  uri: `mongodb://${db.host}/${db.name}${db.stringOptions}`,
  options: {
    user: db.user,
    pass: db.pass,
    useUnifiedTopology: true,
    useNewUrlParser: true,
  },
};

const config = {
  twitter,
  mongodb,
}

export default config;