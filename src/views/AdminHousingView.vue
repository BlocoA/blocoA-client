<script>
import AdminHeader from "@/components/AdminHeader.vue";
import ResidentCard from "@/components/ResidentCard.vue";
import unitService from '@/services/unitService'

export default {
  data() {
    return {
      title: "Habitação",
      subtitle: "Ambiente de controle do administrador",
      residentList: []
    };
  },
  methods: {

  },
  props: ['condominiumId'],
  async mounted() {
    try {
      this.residentList = await unitService.getAllWithResidentInfo(this.condominiumId)
    } catch (error) {
      console.error(error)
    }
  },
  components: { AdminHeader, ResidentCard }
};
</script>

<template>
  <AdminHeader :title="title" :subtitle="subtitle" :showSearch="false" />
  <section>
    <ResidentCard v-for="resident in residentList" :resident="resident" />
  </section>
</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
}
</style>
