<script lang="ts" setup>
import { computed } from "vue";
import { useTheme } from "vuetify";
import logoLight from "@/assets/visuscan-light.png";
import logoDark from "@/assets/visuscan-dark.png";
import { i18n } from "@/plugins/i18n";
import { RouterLink } from "vue-router";
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";
import { scrollTo } from "vuetify/lib/composables/goto.mjs";

const theme = useTheme();

const { t } = i18n.global;
const analyzeResultStore = useAnalyzeResultStore();
const handleAnalyzeClick = () => {
  analyzeResultStore.clearAnalyzeResult();
};

const navbarItems = computed(() => [
  { title: t("navbar.home"), icon: "mdi-home", route: "/" },
  {
    title: t("navbar.analyze"),
    icon: "mdi-upload",
    route: "/analyze/upload",
    onClick: handleAnalyzeClick,
  },
  { title: t("navbar.about"), icon: "mdi-information", route: "/about" },
]);

const logoUrl = computed(() => {
  return theme.global.name.value === "dark" ? logoDark : logoLight;
});

const clickNav = (onClick: (() => void) | undefined) => {
  if (onClick) {
    onClick();
  }
  scrollTo(0, {});
};
</script>

<template>
  <v-app-bar app class="d-block">
    <v-container class="d-flex flex-row align-center">
      <RouterLink to="/">
        <v-img
          :src="logoUrl"
          alt="VisuScan Logo"
          max-height="30"
          max-width="120"
          width="120"
          height="30"
          contain
          class="mx-3"
          draggable="false"
          href="/"
        />
      </RouterLink>

      <v-spacer></v-spacer>

      <v-btn
        v-for="item in navbarItems"
        :key="item.title"
        :to="item.route"
        text
        class="mx-2 d-none d-md-flex"
        @click="clickNav(item?.onClick)"
      >
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>

      <div class="d-md-none">
        <v-menu transition="slide-y-transition">
          <template v-slot:activator="{ props }">
            <v-btn icon v-bind="props"> <v-icon>mdi-menu</v-icon> </v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="item in navbarItems"
              :key="item.title"
              :to="item.route"
              @click="clickNav(item?.onClick)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <ToggleTheme />
      <ToggleLang />
    </v-container>
  </v-app-bar>
</template>
