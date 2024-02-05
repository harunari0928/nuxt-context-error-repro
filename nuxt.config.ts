import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  build: {
    transpile: ['primevue'],
  },
  modules: ["@nuxt/test-utils/module"],
  imports: {
    autoImport: false,
  },
});
