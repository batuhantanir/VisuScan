import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

import * as coreComponents from "vuetify/components";
import * as directives from "vuetify/directives";
import { VFileUpload } from "vuetify/labs/VFileUpload";

const theme = {
  defaultTheme: localStorage.getItem("theme") || "system",
};

const components = {
  ...coreComponents,
  VFileUpload,
};

export const vuetifyOptions = {
  components,
  directives,
  theme,
};
