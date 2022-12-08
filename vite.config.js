import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
  plugins: [sveltekit()],
  test: {
    include: ["test/**/*.{test,spec}.{js,ts}"],
    globals: true, // to avoid importing describe/it everywhere
    types: ["vitest/globals"],
    environment: "jsdom",
    deps: {
      inline: ["test/**/*.svelte"],
    },
  },
};

export default config;
