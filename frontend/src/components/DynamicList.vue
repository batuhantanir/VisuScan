<template>
  <div class="content text-body-1 text-grey-darken-3" v-if="content">
    <span v-for="contentItem in content">
      <h2 v-if="contentItem?.title && !contentItem?.alert">
        {{ contentItem.title }}
      </h2>
      <p v-if="contentItem?.description && !contentItem?.alert">
        {{ contentItem.description }}
      </p>
      <span v-if="contentItem?.children">
        <span v-for="value in contentItem.children">
          <h3 v-if="value?.title">{{ value.title }}</h3>
          <p v-if="value?.description">{{ value.description }}</p>
        </span>
      </span>
      <ul v-if="contentItem?.list">
        <li v-for="item in contentItem.list">{{ item }}</li>
      </ul>

      <v-alert
        type="warning"
        variant="tonal"
        class="my-8"
        icon="mdi-alert-circle-outline"
        v-if="contentItem?.alert"
      >
        <h3 class="text-h6 font-weight-bold mb-2">
          {{ contentItem.title }}
        </h3>
        <p class="mb-0">
          {{ contentItem.description }}
        </p>
      </v-alert>
    </span>
  </div>
</template>
<script lang="ts" setup>
import type { DynamicListContent } from "@/types/DynamicListContent";
import { defineProps } from "vue";

const { content } = defineProps<DynamicListContent>();
</script>

<style scoped>
.content h2 {
  font-size: 1.75rem;
  font-weight: 700;
  color: rgb(var(--v-theme-grey-darken-4));
  margin-top: 2.5rem;
  margin-bottom: 1.25rem;
}

.content h3 {
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(var(--v-theme-grey-darken-3));
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

.content p {
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.content ul {
  margin-bottom: 1.5rem;
  padding-left: 1.5rem;
  line-height: 1.8;
}

.content li {
  margin-bottom: 0.5rem;
}
</style>
