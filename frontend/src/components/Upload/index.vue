<script setup lang="ts">
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";
import shortName from "@/utils/shortName";
import ShowInput from "./ShowInput.vue";

const analyzeResultStore = useAnalyzeResultStore();
</script>

<template>
  <section class="">
    <v-container>
      <!-- If Condition -->
      <ShowResult v-if="analyzeResultStore.imageBlobUrl !== null" />
      <!-- Else Condition -->
      <ShowInput v-else />
    </v-container>
  </section>
</template>
