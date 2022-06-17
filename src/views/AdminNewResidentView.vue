<script>
import AdminHeader from "@/components/AdminHeader.vue";
import residentService from '@/services/residentService'

export default {
  data() {
    return {
      title: "Novo morador",
      subtitle: "Ambiente para cadastrar ou convidar morador",
      name: "",
      identifier: "",
      email: "",
      phone: "",
    }
  },
  props: ['condominiumId'],
  methods: {
    async onSubmit() {
      try {
        await residentService.createResident(
          this.name,
          this.email,
          this.phone,
          this.identifier,
          this.condominiumId
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
  components: { AdminHeader }
}
</script>

<template>
  <div class="container">
    <AdminHeader :title="title" :subtitle="subtitle" :showSearch="false" />
    <form method="post" action="" @submit.prevent="onSubmit">
      <h2>Cadastrar morador</h2>
      <section>
        <div class="row">
          <div class="mb-7 col">
            <label class="form-label">NOME DO USUÁRIO</label>
            <input v-model="name" class="form-control form-control-lg" type="text" />
          </div>
          <div class="mb-7 col">
            <label class="form-label">NÚMERO DA CASA/APTO</label>
            <input v-model="identifier" class="form-control form-control-lg" type="text" />
          </div>
        </div>

        <div class="row">
          <div class="mb-7 col">
            <label class="form-label">E-EMAIL</label>
            <input v-model="email" class="form-control form-control-lg" type="text" />
          </div>
          <div class="mb-7 col">
            <label class="form-label">TELEFONE</label>
            <input v-model="phone" class="form-control form-control-lg" type="text" />
          </div>
        </div>
      </section>

      <button type="submit" class="btn btn-primary fs-lg col-4">
        Salvar
      </button>
    </form>
  </div>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;

  justify-content: space-between;
}

form {
  display: flex;
  flex-direction: column;
  gap: 40px;

  button {
    align-self: center;
  }
}

section {
  padding: 48px;
  background-color: $white;
}
</style>
