<script setup>
import { ref } from "vue";
import AdminHeader from "../components/AdminHeader.vue";

const title = ref("Documentos");
const subtitle = ref("Ambiente de relatórios e documentos");
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
</template>