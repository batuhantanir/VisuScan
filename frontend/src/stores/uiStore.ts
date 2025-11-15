import type { UIState } from "@/types/uiStore";
import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: (): UIState => ({
    isLoading: false,
    errorMessage: undefined,
  }),
  actions: {
    startLoading() {
      this.isLoading = true
    },
    stopLoading() {
      this.isLoading = false
    },
    setErrorMessage(message: string) {
      this.errorMessage = message;
      this.isLoading = false;
    },
    clearErrorMessage() {
      this.errorMessage = "";
    },
  },
});
