<script lang="ts" setup>
import Nabvar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <v-app class="d-flex flex-column min-vh-100">
    <Nabvar />
    <v-main class="flex-1">
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>
