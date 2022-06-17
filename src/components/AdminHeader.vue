<script>

export default {
  data() {
    return {
    }
  },
  props: {
    title: String,
    subtitle: String,
    showSearch: {
      type: Boolean,
      default: true
    },
  }
}
</script>

<template>
  <div class="d-flex justify-content-between">
    <header>
      <h2 class="mb-6">{{ title }}</h2>
      <p class="lead">{{ subtitle }}</p>
    </header>
    <form v-if="showSearch" method="post" action="">
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
