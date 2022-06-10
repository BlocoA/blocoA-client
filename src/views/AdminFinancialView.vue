<script setup>
import { ref } from "vue";
import AdminHeader from "../components/AdminHeader.vue";

const title = ref("Financeiro");
const subtitle = ref("Ambiente de transparência financeira");
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
</template>