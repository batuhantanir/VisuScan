<script setup lang="ts">
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";
import { onBeforeUnmount } from "vue";
import Upload from "@/components/Upload/index.vue";

const analyzeResultStore = useAnalyzeResultStore();

onBeforeUnmount(() => {
  analyzeResultStore.clearAnalyzeResult();
});
</script>

<template>
  <Upload />
</template>
