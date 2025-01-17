import { defineConfig } from "vitest/config";
import { sveltekit } from "@sveltejs/kit/vite";

export default defineConfig(({ mode }) => ({
  plugins: [sveltekit()],

  test: {
    include: ["test/**/*.{test,spec}.{js,ts}"],
    globals: true, // to avoid importing describe/it everywhere
    //types: ["vitest/globals"],
    environment: "happy-dom",
    setupFiles: ["test/setupTest.ts"],
    deps: {
      inline: ["test/**/*.svelte"],
    },
  },
  resolve: {
    conditions: mode === "test" ? ["browser"] : [],
  },
}));
