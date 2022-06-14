<script>
import { mapActions } from "pinia";
import useAuthStore from "../stores/authStore";
import condominiumsService from "@/services/condominiumsService";

export default {
  data() {
    return {
      condominiums: [],
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["logout"]),
  },
  async mounted() {
    try {
      this.condominiums = await condominiumsService.getAll();
    } catch (error) {
      console.error(error);
    }
  },
};
</script>

<template>
  <div
    class="
      card-body
      d-flex
      flex-column
      align-items-center
      justify-content-center
    "
  >
    <h1 class="display-5 mb-13">Criar ambiente</h1>
    <div class="environment-menu">
      <button
        v-if="condominiums.length === 0"
        class="environment-menu-item btn btn-primary"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#environment-modal"
      >
        <img src="@/assets/img/icons/add.svg" alt="" />
      </button>
      <RouterLink
        v-else
        v-for="condominium in condominiums"
        :to="{ name: 'admin-mural', params: { condominiumId: condominium.id } }"
        class="environment-menu-item btn btn-primary"
      >
        <h2>{{ condominium.name }}</h2>
      </RouterLink>
      <div class="environment-menu-info border-dashed">
        <p>
          Assine o plano <strong>Avançado</strong> para adicionar mais de um
          ambiente
        </p>
        <button class="btn btn-sm btn-primary w-100" type="button">
          Assinar por R$ 179
        </button>
      </div>
    </div>
    <button @click="logout" class="btn btn-sm btn-outline-primary mt-21 px-8">
      Sair
    </button>
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
