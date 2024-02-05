import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  modules: ["@nuxt/test-utils/module"],
  imports: {
    autoImport: false,
  },
  typescript: {
    tsConfig: {
      compilerOptions: {
        types: ["@testing-library/jest-dom/vitest"],
      },
    },
  },
});
