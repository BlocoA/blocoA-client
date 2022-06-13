import api from '@/config/api'

export default {
  async create(name, units_quantity, has_leisure_area) {
    const response = await api.post('/v1/condominiums', { name, units_quantity, has_leisure_area })

    return response
  }
}
