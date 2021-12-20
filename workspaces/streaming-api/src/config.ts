import * as dotenv from 'dotenv';
dotenv.config();

const twitter = {
  token: process.env.BEARER_TOKEN,
}

const config = {
  twitter,
}

export default config;