import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/kit/vite";

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
        "default-src": ["self"],
        "connect-src": ["matomo.iroco.co:8080"],
        "script-src": ["self", "matomo.iroco.co:8080", "iroco.co"],
        "img-src": ["self", "matomo.iroco.co:8080", "www.abuseipdb.com"],
        "style-src": ["self"],
        "frame-ancestors": ["self"],
        "frame-src": ["self", "xq520.mjt.lu", "matomo.iroco.co:8080"],
      },
    },
  },
};

export default config;
