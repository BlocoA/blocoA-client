import api from '@/config/api'

export default {
  async create(name, units_quantity, has_leisure_area) {
    const response = await api.post('/v1/condominiums', { name, units_quantity, has_leisure_area })

    return response.data
  },
  async get(condominiumId) {
    const response = await api.get(`/v1/condominiums/${condominiumId}`)

    return response.data
  },
  async getAll() {
    const response = await api.get('/v1/condominiums')

    return response.data
  }
}
