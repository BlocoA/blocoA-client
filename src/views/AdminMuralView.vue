<script setup>
import { ref } from "vue";
import AdminHeader from "../components/AdminHeader.vue";

const title = ref("Mural");
const subtitle = ref("Ambiente para comunicados do Condomínio ABC");
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
</template>