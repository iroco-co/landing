import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const hostname = process.env.HOSTNAME;

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    prerender: {
      handleMissingId: "ignore",
    },
    adapter: adapter({
      pages: "build",
      assets: "build",
      fallback: null,
      precompress: true,
      strict: true,
    }),
    csp: {
      mode: "hash",
      directives: {
        "default-src": ["'self'"],
        "connect-src": [`https://matomo.${hostname}:8080`],
        "script-src": ["'self'", `https://matomo.${hostname}:8080`, hostname],
        "img-src": [
          "'self'",
          `https://matomo.${hostname}:8080`,
          "www.abuseipdb.com",
        ],
        "style-src": ["'self'"],
        "frame-ancestors": ["'self'"],
        "frame-src": [
          "'self'",
          "xq520.mjt.lu",
          `https://matomo.${hostname}:8080`,
        ],
      },
    },
  },
};

export default config;
