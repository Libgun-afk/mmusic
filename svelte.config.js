import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-vercel";

export default {
  kit: {},
  preprocess: preprocess({
    scss: {
      additionalData: "",
    },
    adapter: adapter(),
  }),
};
