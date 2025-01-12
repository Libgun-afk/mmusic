import sveltePreprocess from "svelte-preprocess";
import path from "path";

export default {
  kit: {
    alias: {
      $components: path.resolve("./src/components"),
    },
  },
  preprocess: sveltePreprocess(),
};
