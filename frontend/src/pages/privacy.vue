<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();
import { localDate } from "@/utils/localeDate";
import type { DynamicListContent } from "@/types/DynamicListContent";

const lastUpdated = computed(() =>
  localDate({ year: 2025, month: 10, day: 25 })
);

const privacyContent = computed<DynamicListContent["content"]>(() =>
  tm("privacy.privacyContent")
);
</script>

<template>
  <section class="text-center text-indigo-darken-4">
    <v-container>
      <h1 class="text-h3 font-weight-bold mb-4">{{ $t("privacy.title") }}</h1>
      <p class="text-h6 text-grey-darken-1 mx-auto" style="max-width: 700px">
        {{ $t("privacy.description") }}
      </p>
    </v-container>
  </section>

  <section class="py-16">
    <v-container style="max-width: 900px">
      <v-card class="pa-8 pa-md-12 rounded-xl" elevation="2">
        <div class="text-caption text-grey-darken-1 mb-8">
          {{ $t("lastUpdated") }}: {{ lastUpdated }}
        </div>

        <DynamicList :content="privacyContent" />
      </v-card>
    </v-container>
  </section>
</template>

<style scoped>
.policy-content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-indigo-darken-3));
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.policy-content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-grey-darken-3));
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.policy-content p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.policy-content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.policy-content li {
  margin-bottom: 0.5rem;
}
</style>
