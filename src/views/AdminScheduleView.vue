<script setup>
import { ref } from "vue";
import AdminHeader from "../components/AdminHeader.vue";

const title = ref("Agenda");
const subtitle = ref("Ambiente administrar espaço externo");
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
</template>