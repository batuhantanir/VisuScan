import { createI18n } from "vue-i18n";
import tr from "../locales/tr.json";
import en from "../locales/en.json";

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

export default i18n;