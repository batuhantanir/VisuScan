import { en as vuetifyEn, tr as vuetifyTr } from "vuetify/locale";
import { createI18n, useI18n } from "vue-i18n";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";

import tr from "@/i18n/vuetify/tr.json";
import en from "@/i18n/vuetify/en.json";

const messages = {
  en: {
    ...en,
    $vuetify: vuetifyEn,
  },
  tr: {
    ...tr,
    $vuetify: vuetifyTr,
  },
};

const locale = {
  legacy: false,
  locale: localStorage.getItem("lang") || "tr",
  fallbackLocale: "en",
  messages: messages,
};

export const supportedLanguages = [
  { title: "Türkçe", value: "tr" },
  { title: "English", value: "en" },
];

const i18n = createI18n(locale);

export const vuetifyAdapter = createVueI18nAdapter({ i18n, useI18n });
export default i18n;
