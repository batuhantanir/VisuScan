<script lang="ts" setup>
import heroImage from '@/assets/hero-image.png';

</script>

<template>
  <section class="">
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <h1 class="display-2 font-weight-bold mb-4">
            Welcome to VisuScan
          </h1>
          <p class="subtitle-1 mb-4">
            Your ultimate solution for image analysis and processing. Experience cutting-edge technology designed to make your workflow seamless and efficient.
          </p>
          <v-btn color="primary" large>
            Get Started
          </v-btn>
        </v-col>
        <v-col cols="12" md="6">
          <v-file-input density="default"></v-file-input>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>