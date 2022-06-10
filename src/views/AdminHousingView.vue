<script setup>
import { ref } from "vue";
import AdminHeader from "../components/AdminHeader.vue";

const title = ref("Habitação");
const subtitle = ref("Ambiente de controle do administrador ou síndico");
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
</template>