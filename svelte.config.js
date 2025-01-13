import sveltePreprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";
import path from "path";

export default {
  kit: {
    adapter: adapter(),
    alias: {
      $components: path.resolve("./src/components"),
    },
  },
  preprocess: sveltePreprocess(),
};
