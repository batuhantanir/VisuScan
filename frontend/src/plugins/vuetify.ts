import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { vuetifyAdapter } from "./i18n";

export default createVuetify({
  theme: {
    defaultTheme: localStorage.getItem("theme") || "system",
  },
  locale: vuetifyAdapter,
});
