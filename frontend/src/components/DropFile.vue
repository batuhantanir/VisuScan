<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const files = ref<File>(null);
const isLoading = ref(false);

const onBrowseClick = (event: Event) => {
  const target = event.currentTarget as HTMLElement;
  const input = target
    .closest(".v-file-upload")
    ?.querySelector('input[type="file"]') as HTMLInputElement;
  input?.click();
};

const uploadFiles = () => {
  console.log("Dosyalar seçildi:", files);
  if (files) {
    isLoading.value = true;
    console.log("Yükleniyor:", files.value);
    const file = files.value;
    console.log("Yüklenen dosya adı:", file.name);
    setTimeout(() => {
      isLoading.value = false;
      files.value = null;
      const id = 1;
      router.push(`/analyze/result?id=${id}`);
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
