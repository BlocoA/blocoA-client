<script setup>
import AdminSidebarLeft from "./AdminSidebarLeft.vue";
import AdminSidebarRight from "./AdminSidebarRight.vue";
</script>

<template>
  <AdminSidebarLeft />
  <div class="main-content">
    <RouterView />
  </div>
  <AdminSidebarRight />
</template>