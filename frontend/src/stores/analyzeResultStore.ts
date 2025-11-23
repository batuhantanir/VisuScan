import type { AnalyzeResult } from "@/types/analyzeResult";
import { defineStore } from "pinia";

export const useAnalyzeResultStore = defineStore("analyzeResult", {
  state: (): AnalyzeResult => ({
    imageBlobUrl: null,
    imageName: null,
    result: null,
  }),
  actions: {
    setAnalyzeResult(analyzeResult: AnalyzeResult) {
      this.imageBlobUrl = analyzeResult.imageBlobUrl;
      this.imageName = analyzeResult.imageName;
      this.result = analyzeResult.result;
    },
    clearAnalyzeResult() {
      this.imageBlobUrl = null;
      this.imageName = null;
      this.result = null;
    },
  },
});
