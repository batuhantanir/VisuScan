import type { AnalyzeResult } from "@/types/analyzeResult";
import { defineStore } from "pinia";

export const useAnalyzeResultStore = defineStore("analyzeResult", {
  state: (): AnalyzeResult => {
    return {
      imageBlobUrl: null,
      imageName: null,
      results: [],
    };
  },
  actions: {
    setAnalyzeResult(analyzeResult: AnalyzeResult) {
      this.imageBlobUrl = analyzeResult.imageBlobUrl;
      this.imageName = analyzeResult.imageName;
      this.results = analyzeResult.results;
    },
    clearAnalyzeResult() {
      this.imageBlobUrl = null;
      this.imageName = null;
      this.results = [];
    }
  },
});
