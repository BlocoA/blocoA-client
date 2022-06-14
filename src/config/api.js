import axios from "axios";
import useAuthStore from '@/stores/authStore'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

api.interceptors.request.use((config) => {
  const auth = useAuthStore()

  config.headers.Authorization = `Bearer ${auth.userToken}`
  return config
})

export default api;
