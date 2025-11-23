<template>
  <v-col cols="12" md="6" lg="6" class="d-flex justify-center">
    <v-skeleton-loader
      v-if="uiStore.isLoading"
      class="rounded-xl"
      elevation="5"
      width="100%"
      type="article, actions"
    ></v-skeleton-loader>

    <div class="pa-6 rounded-xl w-100">
      <div v-if="analyzeResultStore.result">
        <div
          class="d-flex justify-space-between align-start mb-4 flex-wrap ga-2"
        >
          <v-card-title
            class="text-h5 font-weight-bold text-primary pa-0 text-wrap"
          >
            {{ analyzeResultStore.result.main_subject }}
          </v-card-title>

          <v-chip
            :color="
              analyzeResultStore.result.is_safe_for_work ? 'success' : 'error'
            "
            class="font-weight-bold"
            variant="flat"
          >
            <v-icon
              start
              :icon="
                analyzeResultStore.result.is_safe_for_work
                  ? 'mdi-check-circle'
                  : 'mdi-alert-circle'
              "
            ></v-icon>
            {{
              analyzeResultStore.result.is_safe_for_work
                ? $t("analyzeResult.safeForWork")
                : $t("analyzeResult.notSafeForWork")
            }}
          </v-chip>
        </div>

        <v-divider class="mb-4"></v-divider>

        <v-card-text class="pa-0">
          <div class="d-flex flex-column my-2">
            <p class="text-body-1 mb-6">
              {{ analyzeResultStore.result.description }}
            </p>

            <div class="mb-6">
              <div class="d-flex justify-space-between align-center mb-2">
                <span class="text-subtitle-2 font-weight-bold">
                  {{ $t("analyzeResult.qualityScore") }}
                </span>
                <span class="text-h6 font-weight-bold text-primary">
                  {{ Math.ceil(analyzeResultStore.result.quality_score) }}%
                </span>
              </div>
              <v-progress-linear
                height="12"
                rounded
                color="primary"
                :model-value="analyzeResultStore.result.quality_score"
              >
              </v-progress-linear>
            </div>

            <div>
              <span class="text-subtitle-2 font-weight-bold d-block mb-2"
                >Etiketler:</span
              >
              <v-chip-group column>
                <v-chip
                  v-for="(tag, i) in analyzeResultStore.result.tags"
                  :key="i"
                  color="primary"
                  variant="tonal"
                  label
                  size="small"
                  class="font-weight-medium"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </div>
          </div>
        </v-card-text>
      </div>

      <v-alert v-else type="info" variant="tonal" class="mt-4">
        {{ $t("analyzeResult.noAnalysisResult") }}
      </v-alert>

      <v-card-actions class="justify-center mt-6 pa-0">
        <v-btn
          color="primary"
          size="large"
          variant="flat"
          rounded="pill"
          prepend-icon="mdi-cloud-upload"
          @click="newUpload"
          class="px-8 font-weight-bold"
        >
          {{ $t("analyzeResult.newUpload") }}
        </v-btn>
      </v-card-actions>
    </div>
  </v-col>
</template>
<script setup lang="ts">
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";
import { useUIStore } from "@/stores/uiStore";
import { scrollTo } from "vuetify/lib/composables/goto.mjs";

const analyzeResultStore = useAnalyzeResultStore();
const uiStore = useUIStore();

const newUpload = () => {
  analyzeResultStore.clearAnalyzeResult();
  scrollTo(0, {});
};
</script>
