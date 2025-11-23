<script setup lang="ts">
import { Vue3Lottie } from "vue3-lottie";
import EyeVisibility from "@/assets/animations/eyeVisibility.json";

</script>

<template>
  <section class="bg-background py-20 lg:py-24">
    <v-container>
      <v-row class="align-center justify-space-between">
        <v-col
          cols="12"
          md="6"
          lg="5"
          class="text-center text-md-left mb-10 mb-md-0"
        >
          <div class="text-uppercase font-weight-bold text-indigo mb-3 ls-2">
            {{ $t("about.supTitle") }}
          </div>
          <h1
            class="text-h3 text-sm-h2 font-weight-black text-indigo-darken-3 mb-6 lh-tight"
          >
            {{ $t("about.title") }}
          </h1>
          <p
            class="text-h6 font-weight-regular text-grey-darken-1 mb-8 mx-auto mx-md-0"
            style="max-width: 550px"
          >
            {{ $t("about.description") }}
          </p>
        </v-col>

        <v-col cols="12" md="6" lg="6" class="d-flex justify-center">
          <div class="d-flex justify-center opacity-90">
            <Vue3Lottie
              :animationData="EyeVisibility"
              loop
              autoplay
              style="height: 400px; width: 100%; max-width: 500px"
              :speed="0.65"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section
    class="py-16 bg-gradient-to-b from-indigo-lighten-5 via-white to-white"
  >
    <v-container>
      <v-row class="align-center mb-24">
        <v-col cols="12" md="6" class="pr-md-12">
          <v-avatar color="indigo-lighten-5" size="60" class="mb-6">
            <v-icon
              icon="mdi-rocket-launch-outline"
              color="indigo-darken-2"
              size="32"
            ></v-icon>
          </v-avatar>
          <h2 class="text-h4 font-weight-bold text-indigo-darken-3 mb-6">
            {{ $t("about.mission.title") }}
          </h2>
          <p
            class="text-h6 font-weight-regular text-grey-darken-2 lh-relaxed mb-6"
          >
            {{ $t("about.mission.description") }}
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <div
            class="illustration-container bg-indigo-lighten-5 rounded-xl d-flex align-center justify-center mx-auto"
            style="
              height: 350px;
              max-width: 450px;
              width: 100%;
              overflow: hidden;
            "
          >
            <img src="/illustrations/lecture_hul.svg" class="responsive-img" />
          </div>
        </v-col>
      </v-row>

      <v-row class="align-center flex-md-row-reverse">
        <v-col cols="12" md="6" class="pl-md-12">
          <v-avatar color="indigo-lighten-5" size="60" class="mb-6">
            <v-icon
              icon="mdi-eye-outline"
              color="indigo-darken-2"
              size="32"
            ></v-icon>
          </v-avatar>
          <h2 class="text-h4 font-weight-bold text-indigo-darken-3 mb-6">
            {{ $t("about.vision.title") }}
          </h2>
          <p class="text-h6 font-weight-regular text-grey-darken-2 lh-relaxed">
            {{ $t("about.vision.description") }}
          </p>
        </v-col>
        <v-col cols="12" md="6" class="text-center">
          <div
            class="illustration-container bg-indigo-lighten-5 rounded-xl d-flex align-center justify-center mx-auto mb-10 mb-md-0"
            style="
              height: 350px;
              max-width: 450px;
              overflow: hidden;
            "
          >
            <img
              src="/illustrations/random-thoughts.svg"
              class="responsive-img"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>

  <section
    class="py-16 text-center bg-gradient-to-b from-indigo-lighten-5 via-white to-white"
  >
    <v-container>
      <h2
        class="text-h4 text-md-h3 font-weight-black text-indigo-darken-3 mb-6"
      >
        {{ $t("about.potential.title") }}
      </h2>
      <p
        class="text-h6 text-grey-darken-2 mb-10 mx-auto"
        style="max-width: 700px"
      >
        {{ $t("about.potential.description") }}
      </p>
      <v-btn
        to="/analyze/upload"
        color="indigo-darken-3"
        size="x-large"
        rounded="pill"
        elevation="6"
        class="font-weight-bold px-10"
        append-icon="mdi-arrow-right"
      >
        {{ $t("about.cta") }}
      </v-btn>
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

.lh-relaxed {
  line-height: 1.6 !important;
}

.illustration-container {
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.illustration-container:hover {
  transform: translateY(-10px);
}

.responsive-img {
  object-fit: contain;
  width: 100%;
  height: 100%;
  padding: 20px 20px 0;
}
</style>
