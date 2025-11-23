<template>
  <v-col cols="12" md="6" lg="5" class="d-flex flex-column align-center text-center">
    <v-card elevation="0" border="0" rounded="lg" class="overflow-hidden w-100">
      <v-img
        v-if="analyzeResultStore.imageBlobUrl"
        :src="analyzeResultStore.imageBlobUrl"
        alt="Uploaded Image"
        cover
        class="bg-grey-lighten-2"
        max-height="500"
        aspect-ratio="4/3"
      >
        <template v-slot:placeholder>
          <v-row class="fill-height ma-0" align="center" justify="center">
            <v-progress-circular indeterminate color="primary"></v-progress-circular>
          </v-row>
        </template>
      </v-img>
    </v-card>
    <v-chip class="mt-4 font-weight-medium" label color="secondary">
      <v-icon start icon="mdi-image-outline"></v-icon>
      {{ shortName(analyzeResultStore.imageName,30) }}
    </v-chip>
  </v-col>

</template>
<script setup lang="ts">
import shortName from "@/utils/shortName";
import {useAnalyzeResultStore} from "@/stores/analyzeResultStore.ts";
const analyzeResultStore = useAnalyzeResultStore();

</script>
