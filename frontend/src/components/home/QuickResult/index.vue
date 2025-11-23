<template>
  <section
    class="py-16 bg-gradient-to-b from-indigo-lighten-5 via-white to-white"
  >
    <v-container>
      <v-row align="center">
        <v-col cols="12" md="5">
          <h2 class="text-h4 font-weight-bold text-indigo-darken-3 mb-6">
            {{ $t("home.quickResult.title") }}
          </h2>
          <p class="text-body-1 text-grey-darken-2 mb-8">
            {{ $t("home.quickResult.description") }}
          </p>

          <v-list bg-color="transparent" lines="two">
            <v-list-item v-for="(step, n) in steps" :key="n" class="px-0 mb-4">
              <template v-slot:prepend>
                <v-avatar
                  class="font-weight-bold elevation-2"
                  color="indigo-darken-2"
                  size="40"
                >
                  {{ n + 1 }}
                </v-avatar>
              </template>
              <v-list-item-title class="font-weight-bold text-h6 ml-4">
                {{ step.title }}
              </v-list-item-title>
              <v-list-item-subtitle class="ml-4 text-body-2 mt-1">
                {{ step.desc }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-col>

        <v-col cols="12" md="6" offset-md="1">
          <v-card class="rounded-lg elevation-10 bg-indigo-darken-4 pa-6">
            <div class="d-flex align-center mb-4">
              <div
                class="bg-red rounded-circle mr-2 d-flex align-center justify-center"
                style="width: 12px; height: 12px"
              >
                <v-icon
                  color="red-darken-3"
                  icon="mdi-plus"
                  size="12"
                  style="rotate: -45deg"
                />
              </div>
              <div
                class="bg-yellow rounded-circle mr-2 d-flex align-center justify-center"
                style="width: 12px; height: 12px"
              >
                <v-icon color="yellow-darken-3" icon="mdi-minus" size="12" />
              </div>
              <div
                class="bg-green rounded-circle rounded-circle mr-2 d-flex align-center justify-center"
                style="width: 12px; height: 12px"
              >
                <v-icon
                  color="green-darken-3"
                  icon="mdi-fullscreen"
                  size="12"
                />
              </div>
            </div>
            <code
              class="text-green-accent-2"
              style="background: transparent; font-family: monospace"
            >
              {<br />
              &nbsp;&nbsp;"imageName": "example.png",<br />
              &nbsp;&nbsp;"result": {<br />
              &nbsp;&nbsp;"description": "A person, likely...",<br />
              &nbsp;&nbsp;"main_subject": "Person taking a photo"<br />
              &nbsp;&nbsp;"is_safe_for_work": true<br />
              &nbsp;&nbsp;"quality_score": 90<br />
              &nbsp;&nbsp;"tags": [<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"photography"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"camera"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"photographer"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"travel"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"hat"<br />
              &nbsp;&nbsp;&nbsp;&nbsp;"person"<br />
              &nbsp;&nbsp;&nbsp;],<br />
              &nbsp;&nbsp;}<br />
              }
            </code>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script setup>
import { useI18n } from "vue-i18n";
import { computed } from "vue";

const { tm } = useI18n();

const steps = computed(() => tm("home.quickResult.steps"));
</script>
