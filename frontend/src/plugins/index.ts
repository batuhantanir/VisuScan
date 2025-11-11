/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from "./vuetify";
import router from "../router";
import i18n from "./i18n";
import Vue3Lottie from "vue3-lottie";

// Types
import type { App } from "vue";

export function registerPlugins(app: App) {
  app
    .use(vuetify)
    .use(Vue3Lottie)
    .use(i18n)
    .use(router);
}
