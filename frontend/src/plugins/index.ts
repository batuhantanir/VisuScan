import type { App } from "vue";
import router from "../router";
import Vue3Lottie from "vue3-lottie";

import i18n from "./i18n";
import { vuetifyOptions } from "./vuetify";

import { createVuetify } from "vuetify";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import { en as vuetifyEn, tr as vuetifyTr } from "vuetify/locale";

export function registerPlugins(app: App) {
  const vuetifyAdapter = createVueI18nAdapter({
    i18n: i18n as any,
    useI18n,
  });

  i18n.global.setLocaleMessage("en", {
    ...(i18n.global.getLocaleMessage("en") as any),
    $vuetify: vuetifyEn,
  } as any);
  i18n.global.setLocaleMessage("tr", {
    ...(i18n.global.getLocaleMessage("tr") as any),
    $vuetify: vuetifyTr,
  } as any);

  const vuetify = createVuetify({
    ...vuetifyOptions,
    locale: { adapter: vuetifyAdapter },
  });

  app.use(i18n).use(vuetify).use(router).use(Vue3Lottie);
}
