import type { UIState } from "@/types/uiStore";
import { defineStore } from "pinia";

export const useUIStore = defineStore("ui", {
  state: (): UIState => {
    return {
      isLoading: false,
      errorMessage: undefined,
    };
  },
  actions: {
    setLoading(isLoading: boolean) {
      this.isLoading = isLoading;
    },
    setErrorMessage(message: string) {
      this.errorMessage = message;
    },
    clearErrorMessage() {
      this.errorMessage = "";
    },
  },
});
