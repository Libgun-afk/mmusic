import adapter from "@sveltejs/adapter-vercel";
import { sveltePreprocess } from "svelte-preprocess";

export default {
  kit: {},
  preprocess: sveltePreprocess({
    scss: {
      additionalData: "",
    },
    adapter: adapter(),
  }),
};
