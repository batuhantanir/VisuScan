<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const props = defineProps<{
  redirect?: string;
}>();

const router = useRouter();

const files = ref<File | undefined>(undefined);
const isLoading = ref(false);

const uploadFiles = () => {
  props.redirect && router.push(props.redirect);
  console.log("Dosyalar seçildi:", files.value);
  if (files.value) {
    isLoading.value = true;
    console.log("Yükleniyor:", files.value);
    const file = files.value;
    console.log("Yüklenen dosya adı:", file?.name);
    setTimeout(() => {
      isLoading.value = false;
      files.value = undefined;
      const id = 1;
    }, 2000);
  }
};
</script>

<template>
  <VFileUpload
    v-model="files"
    accept="image/*"
    :loading="isLoading"
    :disabled="isLoading"
    variant="outlined"
    class="custom-upload"
    @change="uploadFiles"
  ></VFileUpload>
  <v-overlay
    :model-value="isLoading"
    class="d-flex align-center justify-center"
    persistent
  >
    <v-progress-circular
      color="primary"
      size="64"
      indeterminate
    ></v-progress-circular>
  </v-overlay>
</template>

<style>
.custom-upload .v-file-upload__icon {
  font-size: 48px;
  opacity: 0.6;
  margin-bottom: 8px;
}
</style>
