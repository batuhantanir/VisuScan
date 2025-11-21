<script setup lang="ts">
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";
import { useUIStore } from "@/stores/uiStore";
import shortName from "@/utils/shortName";

const analyzeResultStore = useAnalyzeResultStore();
const uiStore = useUIStore();
</script>

<template>
  <v-row class="align-center" justify="center">
    <v-col cols="12" md="6" class="d-flex flex-column align-center text-center">
      <v-img
        v-if="analyzeResultStore.imageBlobUrl"
        :src="analyzeResultStore.imageBlobUrl"
        alt="Uploaded Image"
        class="rounded"
        max-width="400"
        width="300"
      />
      <h6 class="text-subtitle-2">
        {{ shortName(analyzeResultStore.imageName) }}
      </h6>
    </v-col>
    <v-col cols="12" md="6" class="d-flex justify-center text-center">
      <v-card
        v-if="uiStore.isLoading"
        class="pa-4"
        outlined
        width="100%"
        max-width="400"
      >
        <v-card-title class="text-h6">Analyzing Image</v-card-title>
        <v-card-text> Please wait while we analyze your image... </v-card-text>
      </v-card>
      <v-card v-else class="pa-4" outlined width="100%" max-width="400">
        <v-card-title class="text-h6">{{}}</v-card-title>
        <v-card-text>
          <div>
            <div v-if="analyzeResultStore.results">
              <div
                v-for="(value, key) in analyzeResultStore.results"
                :key="key"
                class="d-flex justify-space-between my-2"
              >
                <span class="font-weight-medium">{{ key }}:</span>
                <span>{{ value }}</span>
              </div>
            </div>
            <div v-else>No analysis result available.</div>
          </div>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
