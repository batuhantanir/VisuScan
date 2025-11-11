<script lang="ts" setup>
import { useTheme } from "vuetify";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === "dark" ? "light" : "dark";
  localStorage.setItem("theme", theme.global.name.value);
};
</script>

<template>
  <v-btn icon @click="toggleTheme">
    <v-icon>mdi-theme-light-dark</v-icon>
  </v-btn>
</template>
