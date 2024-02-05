import { fileURLToPath } from "node:url";
import { defineVitestConfig } from "@nuxt/test-utils/config";

export default defineVitestConfig({
  test: {
    globals: true,
    environment: "nuxt",
    setupFiles: [fileURLToPath(new URL("./setup.ts", import.meta.url))],
  },
});
