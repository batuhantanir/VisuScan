<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUIStore } from "@/stores/uiStore";
import { useAnalyzeResultStore } from "@/stores/analyzeResultStore";
import { api } from "@/lib/api";
import { scrollTo } from "vuetify/lib/composables/goto.mjs";

const uiStore = useUIStore();
const analyzeResultStore = useAnalyzeResultStore();

const props = defineProps<{
  redirect?: string;
  border?: string;
}>();

const router = useRouter();

const files = ref<File | undefined>(undefined);
const inputRef = ref<HTMLElement | null>(null);

const uploadFiles = async () => {
  const options = {
    headers: {
      "Content-Type": "multipart/form-data",
      "Accept-Language": localStorage.getItem("lang") || "en",
    },
  };
  uiStore.startLoading();
  analyzeResultStore.clearAnalyzeResult();
  props.redirect && router.push(props.redirect);
  const blobUrl = files.value ? URL.createObjectURL(files.value) : null;

  if (files.value) {
    const formData = new FormData();
    formData.append("file", files.value);
    await api
      .post("/analyze/", formData, options)
      .then((response) => {
        analyzeResultStore.setAnalyzeResult({
          imageBlobUrl: blobUrl,
          imageName: files?.value?.name ?? "",
          result: response.data.result,
        });
        console.log("Sunucudan yanıt alındı:", response.data);
      })
      .catch((error) => {
        console.error("Yükleme hatası:", error);
      })
      .finally(() => {
        uiStore.stopLoading();
        files.value = undefined;
        if (inputRef?.value) {
          inputRef.value = null;
        }
        scrollTo(0, {});
      });
  }
};
</script>

<template>
  <VFileUpload
    v-model="files"
    accept="image/png, image/jpeg, image/jpg"
    :loading="uiStore.isLoading"
    :disabled="uiStore.isLoading"
    class="custom-upload"
    @change="uploadFiles"
    :border="props.border || ''"
    width="100%"
    ref="inputRef"
  ></VFileUpload>
</template>

<style>
.custom-upload .v-file-upload__icon {
  font-size: 48px;
  opacity: 0.6;
  margin-bottom: 8px;
}
.v-file-upload-items {
  display: none;
}
</style>
