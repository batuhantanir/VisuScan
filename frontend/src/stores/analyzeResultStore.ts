import type { AnalyzeResult } from "@/types/analyzeResult";
import { defineStore } from "pinia";

export const useAnalyzeResultStore = defineStore("analyzeResult", {
  state: (): AnalyzeResult => {
    return {
      imageBlob: null,
      results: [],
    };
  },
  actions: {
    setAnalyzeResult(analyzeResult: AnalyzeResult) {
      this.imageBlob = analyzeResult.imageBlob;
      this.results = analyzeResult.results;
    },
  },
});
