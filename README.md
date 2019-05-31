# tns-next-example
An example of using typescript-node-scripts to power the backend with Next.js SSR support.

Server code lives inside `src`, and UI code lives inside `ui`.

## Quick Start

```sh
# install deps
yarn

# start the dev server
yarn start

# navigate to localhost:3000
open http://localhost:3000
```

## Production Build

```sh
# build your server to `dist/` and next app to `.next/`
yarn build

# start your server
NODE_ENV=production node dist/bundle.prod.js
```