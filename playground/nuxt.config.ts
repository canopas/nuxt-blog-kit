export default defineNuxtConfig({
  modules: ["../src/module"],
  resources: {},
  devtools: { enabled: true },
  imports: {
    dirs: ["stores"],
  },
});
