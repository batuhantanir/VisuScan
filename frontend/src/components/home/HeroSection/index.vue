<script lang="ts" setup>
import { Vue3Lottie } from 'vue3-lottie'
import DataScanning from '@/assets/animations/dataScanning.json'
</script>

<template>
  <section
    class="bg-gradient-to-b from-indigo-lighten-5 via-white to-white py-8 lg:py-16"
  >
    <v-container>
      <v-row class="align-center justify-space-between">
        <v-col
          class="text-center text-md-left mb-10 mb-md-0"
          cols="12"
          lg="5"
          md="6"
        >
          <div class="d-flex justify-center justify-md-start">
            <Vue3Lottie
              :animationData="DataScanning"
              autoplay
              loop
              style="height: 300px; width: 300px"
            />
          </div>
          <div class="text-uppercase font-weight-bold text-indigo mb-3 ls-2">
            {{ $t("home.hero.eyebrow") }}
          </div>

          <h1
            class="text-h4 text-sm-h3 font-weight-black text-indigo-darken-3 mb-6 lh-tight"
          >
            {{ $t("home.hero.title") }}
          </h1>

          <p
            class="text-h6 font-weight-regular text-grey-darken-1 mb-8 mx-auto mx-md-0"
            style="max-width: 550px"
          >
            {{ $t("home.hero.description") }}
          </p>
        </v-col>

        <v-col cols="12" md="6" lg="6" class="d-flex justify-center">
          <v-card class="pa-2 w-100" style="max-width: 550px" elevation="0">
            <v-card-title
              class="text-center text-indigo-darken-2 pt-4 pb-2 font-weight-bold"
            >
              {{ $t("home.hero.cta") }}
            </v-card-title>
            <v-card-text>
              <DropFile :redirect="'/analyze/upload'" />
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.ls-2 {
  letter-spacing: 2px !important;
}
.lh-tight {
  line-height: 1.2 !important;
}

.blur-3xl {
  filter: blur(64px);
}
</style>
