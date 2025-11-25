<script lang="ts" setup>
import Nabvar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { useUIStore } from "@/stores/uiStore";
import LoadingJSON from "@/assets/animations/loading.json";
import { Vue3Lottie } from "vue3-lottie";

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
      <Vue3Lottie
        :animationData="LoadingJSON"
        autoplay
        loop
        style="width: 350px; height: 350px"
      />
    </v-overlay>
  </v-app>
</template>
