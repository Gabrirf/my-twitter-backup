# my-twitter-backup

## Instalation

1. Download or clone this repo

```bash
git clone https://github.com/Gabrirf/my-twitter-backup.git
```

2. Install npm dependencies

```bash
npm i
```

3. Copy & configure env file

```bash
npm run copy:file
```

> You must insert your Twitter API Bearer token `BREAER_TOKEN` variable on streaming api module.

4. Deploy local services with docker-compose

```bash
npm run compose:tools
```

5. Launch app from root repository folder

```bash
npm start
```

## Architecture

![Technical architecture](doc/images/streaming-twitter.drawio.png)

## Code structure

```
📦my-twitter-backup
 ┣ 📂.vscode
 ┣ 📂doc
 ┣ 📂docker
 ┣ 📂workspaces
 ┃ ┣ 📂helpers
 ┃ ┣ 📂models
 ┃ ┣ 📂reading-api
 ┃ ┗ 📂streaming-api
 ┣ 📜.eslintignore
 ┣ 📜.eslintrc.js
 ┣ 📜.gitignore
 ┣ 📜LICENSE
 ┣ 📜README.md
 ┣ 📜lerna.json
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜tsconfig.json
```

### Stream API

```
📦streaming-api
 ┣ 📂src
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜graphql-controller.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂graphql
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜schema.ts
 ┃ ┣ 📂loaders
 ┃ ┃ ┣ 📜express-loader.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜mongodb-loader.ts
 ┃ ┃ ┗ 📜twitter-loader.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜mongodb-service.ts
 ┃ ┃ ┗ 📜twitter-service.ts
 ┃ ┣ 📜app.ts
 ┃ ┣ 📜config.ts
 ┃ ┗ 📜index.ts
 ┣ 📂test
 ┣ 📜.env
 ┣ 📜.env.template
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```
### Reading API

```
📦reading-api
 ┣ 📂src
 ┃ ┣ 📂controllers
 ┃ ┃ ┣ 📜graphql-controller.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂graphql
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜schema.ts
 ┃ ┣ 📂loaders
 ┃ ┃ ┣ 📜express-loader.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜mongodb-loader.ts
 ┃ ┣ 📂services
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜mongodb-service.ts
 ┃ ┣ 📜app.ts
 ┃ ┣ 📜config.ts
 ┃ ┗ 📜index.ts
 ┣ 📂test
 ┣ 📜.env
 ┣ 📜.env.template
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┗ 📜package.json
```

## Main challenges

- Deploy Typescrypt
- Configure Linter for Typescript
- Learn and use GraphQL
- Work with Streams
- Integrate Twitter API

## Complications

- Highlight TSLint on VSCode
- Setup typescript debug on VSCode
- Integrate Twitter API v1 (only premium access, require elevate)
- Typescript types and syntax
- Twitter API 429: too many request

## Improvements and alternatives

- Configure Linter
- Configure VSCode Debug
- Allow 'asc' or 'desc' to sort
- Return total elements and total pages in pagination
- Allow unsubscribe from Stream
- TODO Unit test

## References

- [Monorepo: Lerna+Typescript](https://github.com/abd1tus/typescript-monorepo-example)
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)
    - [Filtered Stream](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream)
- [NPM twitter-api-v2](https://github.com/PLhery/node-twitter-api-v2/tree/fa7b499db5314c1dd1254682d59e58f3f4b8e082)
    - [Streaming](https://github.com/plhery/node-twitter-api-v2/blob/HEAD/doc/streaming.md)
    - [Examples](https://github.com/plhery/node-twitter-api-v2/blob/HEAD/doc/examples.md)
    