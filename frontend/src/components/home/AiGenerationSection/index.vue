<template>
  <section
    class="py-16 bg-gradient-to-b from-indigo-lighten-5 via-white to-white"
  >
    <v-container>
      <div class="text-center mb-12">
        <h2 class="text-h4 font-weight-bold text-indigo-darken-3 mb-3">
          {{ $t("home.aiGeneration.title") }}
        </h2>
        <p
          class="text-subtitle-1 text-grey-darken-1"
          style="max-width: 700px; margin: 0 auto"
        >
          {{ $t("home.aiGeneration.description") }}
        </p>
      </div>

      <v-row>
        <v-col v-for="(feature, i) in features" :key="i" cols="12" md="4">
          <v-card
            class="h-100 px-4 py-6 text-center rounded-xl border"
            elevation="0"
            hover
          >
            <v-avatar class="mb-5" color="indigo-lighten-5" size="80">
              <v-icon color="indigo-darken-2" :icon="feature.icon" size="40" />
            </v-avatar>
            <h3 class="text-h6 font-weight-bold mb-3">{{ feature.title }}</h3>
            <p class="text-body-2 text-grey-darken-1">{{ feature.text }}</p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script setup>
import { computed } from "vue";
import { useI18n } from "vue-i18n";
const { tm } = useI18n();

const features = computed(() => tm("home.aiGeneration.features"));
</script>

<style scoped>
.v-card--hover:hover {
  transform: translateY(-5px);
  transition: transform 0.3s ease;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1) !important;
  border-color: #3949ab !important;
}
</style>
