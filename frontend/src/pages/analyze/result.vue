<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
const id = route.query.id as string;
</script>

<template>resıult.vue {{ id }}</template>
