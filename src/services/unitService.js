import api from '@/config/api'

export default {
  async getAllWithResidentInfo(condominiumId) {
    const response = await api.get(`/v1/units/with_resident_info?condominium_id=${condominiumId}`)

    return response.data
  }
}
