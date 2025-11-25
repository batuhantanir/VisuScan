<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();
import { localDate } from "@/utils/localeDate";
import type { DynamicListContent } from "@/types/DynamicListContent";

const lastUpdated = computed(() =>
  localDate({ year: 2025, month: 10, day: 25 })
);

const termsContent = computed<DynamicListContent["content"]>(() =>
  tm("terms.termsContent")
);
</script>

<template>
  <section class="text-center text-indigo-darken-4">
    <v-container>
      <h1 class="text-h3 font-weight-bold mb-4">{{ $t("terms.title") }}</h1>
      <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 700px">
        {{ $t("terms.description") }}
      </p>
    </v-container>
  </section>

  <section class="py-16">
    <v-container style="max-width: 900px">
      <v-card class="pa-8 pa-md-12 rounded-xl" elevation="2">
        <div class="text-caption text-grey-darken-1 mb-8">
          {{ $t("lastUpdated") }}:
          {{ lastUpdated }}
        </div>

        <DynamicList :content="termsContent" />
      </v-card>
    </v-container>
  </section>
</template>
