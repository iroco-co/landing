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
        "connect-src": ["matomo.iroco.co"],
        "script-src": ["self", "matomo.iroco.co","iroco.co"],
        "img-src": [
          "self",
          "matomo.iroco.co",
          "www.abuseipdb.com",
        ],
        "style-src": ["self"],
        "frame-ancestors": ["self"],
        "frame-src": ["self", "xq520.mjt.lu","matomo.iroco.co"],
      },
    },
  },
};

export default config;
