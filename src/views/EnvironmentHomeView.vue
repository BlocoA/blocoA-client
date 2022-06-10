<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <div class="card-body d-flex flex-column align-items-center justify-content-center">
    <h1 class="display-5 mb-13">Criar ambiente</h1>
    <div class="environment-menu">
      <button class="environment-menu-item btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#environment-modal">
        <svg class="svg-inline--icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M432 256c0 17.69-14.33 32.01-32 32.01H256v144c0 17.69-14.33 31.99-32 31.99s-32-14.3-32-31.99v-144H48c-17.67 0-32-14.32-32-32.01s14.33-31.99 32-31.99H192v-144c0-17.69 14.33-32.01 32-32.01s32 14.32 32 32.01v144h144C417.7 224 432 238.3 432 256z" />
        </svg>
      </button>
      <div class="environment-menu-info border-dashed">
        <p>Assine o plano <strong>Avançado</strong> para adicionar mais de um ambiente </p>
        <button class="btn btn-sm btn-primary w-100" type="button">
          Assinar por R$ 179
        </button>
      </div>
    </div>
    <RouterLink to="/" class="btn btn-sm btn-outline-primary mt-21 px-8">Sair</RouterLink>
  </div>
</template>

<style scoped lang="scss">
.environment-menu {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 80px;

  &-item {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 240px;
    height: 240px;
    font-size: 6rem;
  }

  &-info {
    width: 290px;
    padding: 45px 30px;
    font-size: $font-size-lg;
    color: $primary;
  }
}
</style>
