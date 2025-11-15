<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUIStore } from "@/stores/uiStore";
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";

const uiStore = useUIStore();
const analyzeResultStore = useAnalyzeResultStore();

const props = defineProps<{
  redirect?: string;
  border?: string;
}>();

const router = useRouter();

const files = ref<File | undefined>(undefined);

const uploadFiles = () => {
  uiStore.startLoading();
  analyzeResultStore.clearAnalyzeResult();
  props.redirect && router.push(props.redirect);
  console.log("Dosyalar seçildi:", files.value);
  const blobUrl = files.value ? URL.createObjectURL(files.value) : null;
  if (files.value) {
    console.log("Yükleniyor:", files.value);
    analyzeResultStore.setAnalyzeResult({
      imageBlobUrl: blobUrl,
      imageName: files.value.name,
      results: [],
    });
    const file = files.value;
    console.log("Yüklenen dosya adı:", file?.name);
    setTimeout(() => {
      files.value = undefined;
      uiStore.stopLoading();
      const id = 1;
    }, 2000);
  }
};
</script>

<template>
  <VFileUpload
    v-model="files"
    accept="image/*"
    :loading="uiStore.isLoading"
    :disabled="uiStore.isLoading"
    class="custom-upload"
    @change="uploadFiles"
    :border="props.border || ''"
    width="100%"
  ></VFileUpload>
</template>

<style>
.custom-upload .v-file-upload__icon {
  font-size: 48px;
  opacity: 0.6;
  margin-bottom: 8px;
}

</style>
