<script lang="ts" setup>
import { supportedLanguages } from "@/plugins/i18n";
import { useI18n } from "vue-i18n";

let { locale } = useI18n();

const toggleLanguage = (lang: { value: string }) => {
  locale.value = lang.value;
  localStorage.setItem("lang", lang.value);
};
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn icon v-bind="props">
        <v-icon>mdi-translate</v-icon>
      </v-btn>
    </template>

    <v-list>
      <v-list-item
        v-for="lang in supportedLanguages"
        :key="lang.value"
        @click="toggleLanguage(lang)"
      >
        <v-list-item-title :selected="locale === lang.value">{{
          lang.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
