import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

const hostname = process.env.PUBLIC_HOSTNAME ?? "irocoenv";
const matomo_hostname =
  process.env.PUBLIC_MATOMO_HOSTNAME ?? "matomo.test.iroco.co";

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
        "connect-src": [`https://${matomo_hostname}`, `${matomo_hostname}`],
        "script-src": [
          "'self'",
          `https://${matomo_hostname}`,
          hostname,
          matomo_hostname,
        ],
        "img-src": [
          "'self'",
          `https://${matomo_hostname}`,
          `${matomo_hostname}`,
          "www.abuseipdb.com",
        ],
        "style-src": ["'self'"],
        "frame-ancestors": ["'self'"],
        "frame-src": [
          "'self'",
          "xq520.mjt.lu",
          `https://${matomo_hostname}`,
          `${matomo_hostname}`,
        ],
      },
    },
  },
};

export default config;
