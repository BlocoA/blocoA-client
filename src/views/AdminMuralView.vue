<script>
import AdminHeader from "@/components/AdminHeader.vue";
import condominiumsService from '@/services/condominiumsService'

export default {
  data() {
    return {
      title: "Mural",
      subtitle: "",
      informationList: [
        {
          author: "Carlos Ferreira",
          content: "O elemento HTML <hr> representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação."
        }, {
          author: "Carlos Ferreira",
          content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem"
        }, {
          author: "Carlos Ferreira",
          content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem"
        }, {
          author: "Carlos Ferreira",
          content: "Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem"
        }, {
          author: "Carlos Ferreira",
          content: "O elemento HTML <hr> representa uma quebra temática entre elementos de nível de parágrafo (por exemplo , uma mudança da cena de uma história, ou uma mudança de tema com uma seção). Nas versões anteriores do HTML, representava uma linha horizontal. Pode continuar sendo exibida como uma linha horizontal nos navegadores, mas agora está definida em termos semânticos, em vez de termos de apresentação."
        }
      ]
    };
  },
  props: ['condominiumId'],
  async mounted() {
    try {
      const condominium = await condominiumsService.get(this.condominiumId)
      this.subtitle = `Ambiente para comunicados do ${condominium.name}`
    } catch (error) {
      console.error(error)
    }
  },
  components: { AdminHeader }
}
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" />
  <div class="info-container">
    <div v-for="information in informationList">
      <span class="span-info-author">{{ information.author }}</span>
      <p class="p-info-content">{{ information.content }}</p>
      <hr />
    </div>
  </div>
  <form method="post" action="">
    <input class="form-control form-search" type="text" placeholder="Digite...">
  </form>
</template>

<style scoped lang="scss">
.form-search {
  font-size: $font-size-lg;
  color: $primary;
  background-color: rgba($primary, $bg-soft-bg-opacity);
}
.info-container {
  overflow-y: scroll;
  height: 480px;
  margin-top: 50px;
  margin-bottom: 150px;
  //flex-direction: column;
}
.span-info-author {
  display: flex;
  padding-top: 73px;
  font-size: 24px;
  font-weight: bold;
}
.p-info-content {
  font-size: 16px;
}
</style>
