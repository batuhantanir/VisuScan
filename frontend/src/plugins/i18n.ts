import { createI18n } from "vue-i18n";
import tr from "../locales/tr.json";
import en from "../locales/en.json";
import { createVueI18nAdapter } from "vuetify/locale/adapters/vue-i18n";
import { useI18n } from "vue-i18n";
import { en as vuetifyEn, tr as vuetifyTr } from "vuetify/locale";

const messages = {
  en: en,
  tr: tr,
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

export { i18n, vuetifyAdapter };
