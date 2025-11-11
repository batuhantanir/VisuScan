import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import { createVuetify } from "vuetify";
import { VFileUpload } from "vuetify/labs/VFileUpload";
import { vuetifyAdapter } from "./i18n";

const theme = {
  defaultTheme: localStorage.getItem("theme") || "system",
};

const components = {
  VFileUpload,
};

export default createVuetify({
  components,
  theme,
  locale: vuetifyAdapter,
});
