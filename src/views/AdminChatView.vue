<script setup>
import { ref } from "vue";
import AdminHeader from "../components/AdminHeader.vue";

const title = ref("Chat");
const subtitle = ref("Mensagens instantâneas");
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
</template>