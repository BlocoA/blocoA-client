<script setup>
const props = defineProps({
  title: String,
  subtitle: String,
});
</script>

<template>
  <div class="d-flex justify-content-between">
    <header>
      <h2 class="mb-6">{{ title }}</h2>
      <p class="lead">{{ subtitle }}</p>
    </header>
    <form method="post" action="">
      <input class="form-control form-search" type="text" placeholder="Pesquise">
    </form>
  </div>
</template>

<style scoped lang="scss">
.form-search {
  font-size: $font-size-lg;
  color: $primary;
  background-color: rgba($primary, $bg-soft-bg-opacity);
}
</style>