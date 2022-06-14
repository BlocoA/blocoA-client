<script>
import AdminHeader from "@/components/AdminHeader.vue";
import condominiumsService from '@/services/condominiumsService'

export default {
  data() {
    return {
      title: "Mural",
      subtitle: ""
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
</template>
