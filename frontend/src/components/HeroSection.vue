<script lang="ts" setup>
import heroImage from "@/assets/hero-image.png";
import { Vue3Lottie } from "vue3-lottie";
import DataScanning from "@/assets/animations/dataScanning.json";
</script>

<template>
  <section class="">
    <v-container>
      <v-row class="align-center" justify="center">
        <v-col cols="12" md="6">
          <Vue3Lottie
            :animationData="DataScanning"
            loop
            autoplay
            style="height: 300px; width: 300px"
          />
          <h2 class="text-h4 font-weight-bold text-sm-h3 text-md-h2">
            {{ $t("hero.title") }}
          </h2>
          <p class="subtitle-1 mb-4">
            {{ $t("hero.description") }}
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <DropFile />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
