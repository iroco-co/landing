import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),

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
        "default-src": ["self"],
        "connect-src": ["https://matomo.iroco.co"],
        "script-src": ["self", "https://matomo.iroco.co"],
        "img-src": ["self", "https://matomo.iroco.co", "https://www.abuseipdb.com"],
        "style-src": ["self"],
        "frame-ancestors": ["self"],
        "frame-src": ["self", "https://xq520.mjt.lu"],
      },
    },
  },
};

export default config;
