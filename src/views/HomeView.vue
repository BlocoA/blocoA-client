<script>
import { mapActions } from "pinia";
import useAuthStore from "../stores/authStore";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useAuthStore, ["login"]),
    async onSubmit() {
      try {
        await this.login(this.email, this.password);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<template>
  <div class="home">
    <div class="home-left">
      <img
        class="mb-13"
        src="@/assets/img/logos/easycond.svg"
        alt="Easycond"
        height="40"
      />
      <h1 class="display-5">Administre facilmente seu condomínio</h1>
    </div>
    <div class="home-right">
      <div class="card">
        <form method="post" action="" @submit.prevent="onSubmit">
          <div class="mb-7">
            <label class="form-label">Usuário</label>
            <input
              v-model="email"
              class="form-control form-control-lg"
              type="text"
              placeholder="easycond"
            />
          </div>
          <div class="mb-7">
            <label class="form-label">Senha</label>
            <input
              v-model="password"
              class="form-control form-control-lg"
              type="password"
              placeholder="**********"
            />
          </div>
          <a class="d-inline-block mb-7" href="#">Esqueceu a senha?</a>
          <button class="btn btn-lg btn-primary w-100 mb-7" type="submit">
            Acessar
          </button>
          <p class="text-center mb-0">
            Não tem conta? <a href="#">Cadastre-se</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1160px;
  margin: auto;

  &-left {
    width: 365px;
  }

  &-right {
    width: 540px;

    .card {
      padding: 70px;
      font-size: $h5-font-size;
    }
  }
}
</style>
