<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { tm } = useI18n();
const features = computed(() => tm("showInput.features"));
</script>

<template>
  <v-row justify="center" class="mb-8">
    <v-col cols="12" md="12" class="text-center">
      <h2 class="text-h4 font-weight-bold text-indigo-darken-4 mb-2">
        {{ $t("showInput.title") }}
      </h2>
      <p class="text-subtitle-1 text-medium-emphasis mb-6">
        {{ $t("showInput.description") }}
      </p>

      <DropFile />
    </v-col>
  </v-row>

  <v-row justify="center" class="mt-8">
    <v-col cols="12" class="text-center mb-4">
      <h3 class="text-h5 font-weight-medium text-indigo-darken-4">
        {{ $t("showInput.howToUse") }}
      </h3>
    </v-col>

    <v-col v-for="(feature, index) in features" :key="index" cols="12" md="4">
      <v-card
        flat
        class="text-center bg-transparent px-4 py-6 h-100 text-indigo-darken-4"
        rounded="lg"
      >
        <v-avatar color="primary-lighten-4" size="70" class="mb-4">
          <v-icon
            :icon="feature.icon"
            color="indigo-darken-4"
            size="36"
          ></v-icon>
        </v-avatar>
        <h4 class="text-h6 font-weight-bold mb-2">
          {{ feature.title }}
        </h4>
        <p class="text-body-2 text-medium-emphasis">
          {{ feature.text }}
        </p>
      </v-card>
    </v-col>
  </v-row>
</template>
