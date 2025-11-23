<template>
  <section class="py-16 bg-gradient-to-b from-indigo-lighten-5 via-white to-white">
    <v-container style="max-width: 900px">
      <h2
        class="text-h4 font-weight-bold text-center text-indigo-darken-3 mb-10"
      >
        {{ $t("home.faq.title") }}
      </h2>

      <v-expansion-panels variant="popout">
        <v-expansion-panel v-for="(faq, i) in faqs" :key="i" class="mb-2">
          <v-expansion-panel-title class="text-subtitle-1 font-weight-bold">
            {{ faq.question }}
          </v-expansion-panel-title>
          <v-expansion-panel-text class="text-body-2 text-grey-darken-2 pt-2">
            {{ faq.answer }}
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </section>
</template>

<script setup lang="ts">
import {computed} from "vue";
import {useI18n} from "vue-i18n";

const {tm} = useI18n();

const faqs = computed(() => tm("home.faq.items"))
</script>
