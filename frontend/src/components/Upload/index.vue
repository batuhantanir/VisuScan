<script setup lang="ts">
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";

const analyzeResultStore = useAnalyzeResultStore();
</script>

<template>
  <section
    class="min-h-screen d-flex align-center py-10 bg-gradient-to-b from-indigo-lighten-5 via-white to-white lg:py-16"
  >
    <v-container>
      <ShowResult
        v-if="analyzeResultStore.imageBlobUrl !== null"
        key="result"
      />

      <ShowInput v-else key="input" />
    </v-container>
  </section>
</template>

<style scoped>
.min-h-screen {
  min-height: calc(100vh - 64px);
}
</style>
