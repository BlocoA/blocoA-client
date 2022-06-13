import api from '@/config/api'

export default {
  async login(email, password) {
    const response = await api.post('/v1/users/access_token', { email, password })

    return response
  }
}
