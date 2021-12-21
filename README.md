# my-twitter-backup

## Architecture

![Technical architecture](doc/images/streaming-twitter.drawio.png)

## Code structure

// TODO folder tree

### Stream API

// TODO folder tree

### Reading API

// TODO folder tree

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

## References

- [Monorepo: Lerna+Typescript](https://github.com/abd1tus/typescript-monorepo-example)
- [Twitter API](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api)
    - [Filtered Stream](https://developer.twitter.com/en/docs/twitter-api/tweets/filtered-stream/api-reference/get-tweets-search-stream)
- [NPM twitter-api-v2](https://github.com/PLhery/node-twitter-api-v2/tree/fa7b499db5314c1dd1254682d59e58f3f4b8e082)
    - [Streaming](https://github.com/plhery/node-twitter-api-v2/blob/HEAD/doc/streaming.md)
    - [Examples](https://github.com/plhery/node-twitter-api-v2/blob/HEAD/doc/examples.md)
    