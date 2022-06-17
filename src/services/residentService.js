import api from '@/config/api'

export default {
  async createResident(name, email, phone, identifier, condominiumId) {
    const response = await api.post(`/v1/residents?condominium_id=${condominiumId}`, { name, email, phone, identifier })

    return response.data
  }
}
