import { defineNuxtPlugin } from "nuxt/app";
import { PROVIDES_SYMBOL } from "../utils/symbol";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(PROVIDES_SYMBOL, "hello world");
});
