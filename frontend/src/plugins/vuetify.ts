import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import * as coreComponents from "vuetify/components";
import * as directives from "vuetify/directives";
import { VFileUpload } from "vuetify/labs/VFileUpload";
import { createVuetify } from "vuetify";
import { vuetifyAdapter } from "./i18n";

const theme = {
  defaultTheme: localStorage.getItem("theme") || "system",
};

const components = {
  ...coreComponents,
  VFileUpload,
};

const vuetifyOptions = {
  components,
  directives,
  theme,
};

const vuetify = createVuetify({
  ...vuetifyOptions,
  locale: { adapter: vuetifyAdapter },
});

export default vuetify;
