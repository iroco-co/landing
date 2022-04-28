# Iroco landing

Sveltekit Iroco landing page.

It needs node 14.15, and 16 for running playwright end-to-end tests.

see [this url](https://github.com/nodesource/distributions/blob/master/README.md) for installing node versions.

## Developing

You can install dependencies with `npm install` (or `pnpm install` or `yarn`). Then run the unitests with

```bash
$ npm run test
```

Then run the playwright end-to-end tests (after installing playwright browser) :

```bash
$ npx playwright install
$ npm run eetest
```

To run a server :

```bash
$ npm run dev

# or start the server and open the app in a new browser tab
$ npm run dev -- --open
```

## Building

To create a static deployable version of your app with [svelte adapter static](https://github.com/icdance/sveltekit/tree/master/packages/adapter-static):

```bash
npm run build
```

You can preview the production build with `npm run preview`.
