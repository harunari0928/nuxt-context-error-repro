import PrimeVue from "primevue/config";
import ToastService from "primevue/toastservice";
import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin((nuxtApp) => {
  const app = nuxtApp.vueApp;

  app.use(PrimeVue);
  app.use(ToastService);
});
