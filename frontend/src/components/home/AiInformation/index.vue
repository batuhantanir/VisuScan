<template>
  <section class="py-12 bg-indigo-lighten-1 text-white">
    <v-container>
      <v-row justify="center" class="text-center">
        <v-col v-for="item in features" cols="12" md="3">
          <div
            class="text-h3 font-weight-black mb-2"
            style="white-space: nowrap"
          >
            {{ item.title }}
          </div>
          <div class="text-indigo-lighten-4" style="white-space: nowrap">
            {{ item.text }}
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
  import { computed } from 'vue'
  import { useI18n } from 'vue-i18n'
  const { tm } = useI18n()
  const features = computed(() => tm('home.aiInformation.features'))
</script>
