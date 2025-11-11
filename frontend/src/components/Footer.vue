<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { t } = useI18n();

const socialMediaIcons = [
  {
    name: "mdi-twitter",
    url: "https://www.twitter.com/",
  },
  {
    name: "mdi-linkedin",
    url: "https://www.linkedin.com/",
  },
  {
    name: "mdi-github",
    url: "https://www.github.com/batuhantanir/VisuScan",
  },
];

const footerItems = computed(() => [
  [
    {
      title: t("navbar.home"),
      route: "/",
    },
    {
      title: t("navbar.analyze"),
      route: "/upload",
    },
    {
      title: t("navbar.about"),
      route: "/about",
    },
  ],
  [
    {
      title: t("footer.privacy"),
      route: "/privacy",
    },
    {
      title: t("footer.terms"),
      route: "/terms",
    },
  ],
]);
</script>

<template>
  <v-footer
    class="text-center d-flex justify-space-between ga-2 py-4 flex-grow-0 flex-column flex-sm-row"
    color="indigo-lighten-1"
  >
    <v-container
      class="d-flex flex-column flex-sm-row justify-space-between align-center"
    >
      <div
        class="d-flex flex-column align-center ga-2"
        style="max-width: 400px"
      >
        <v-img
          src="@/assets/visuscan-dark.png"
          alt="VisuScan Logo"
          max-height="40"
          width="100%"
          draggable="false"
        />

        <div class="text-caption font-weight-regular opacity-60 px-6">
          {{ t("footer.description") }}
        </div>

        <div class="d-flex ga-3">
          <v-btn
            v-for="icon in socialMediaIcons"
            :key="icon.name"
            :icon="icon.name"
            density="comfortable"
            variant="text"
            :href="icon.url"
            target="_blank"
          />
        </div>
      </div>

      <div class="d-flex ga-6 justify-center flex-wrap mt-4 mt-sm-0">
        <div
          v-for="(itemSet, index) in footerItems"
          :key="index"
          class="d-flex flex-column bg-transparent align-center"
          style="min-width: 120px"
        >
          <v-btn
            v-for="item in itemSet"
            :key="item.title + index"
            :href="item.route"
            class="my-1 text-body-2 text-decoration-none text-white"
            variant="text"
          >
            {{ item.title }}
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>
