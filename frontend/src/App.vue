<script lang="ts" setup>
import Nabvar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useUIStore } from "@/stores/uiStore";

const uiStore = useUIStore();
</script>

<template>
  <v-app class="d-flex flex-column min-vh-100">
    <Nabvar />
    <Main />
    <Footer />
    <v-overlay
      :model-value="uiStore.isLoading"
      class="d-flex align-center justify-center"
      persistent
    >
      <v-progress-circular
        color="primary"
        size="64"
        indeterminate
      ></v-progress-circular>
    </v-overlay>
  </v-app>
</template>
