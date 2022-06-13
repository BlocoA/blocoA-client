import { defineStore } from 'pinia'

import usersService from '@/services/usersService'
import router from '@/router'

const useAuthStore = defineStore('auth', {
  state: () => ({
    userToken: JSON.parse(localStorage.getItem('userToken')),
  }),
  actions: {
    async login(username, password) {
      try {
        const { data: { token: userToken } } = await usersService.login(username, password)

        this.userToken = userToken

        localStorage.setItem('userToken', JSON.stringify(userToken))

        router.push('/ambiente')
      } catch (error) {
        console.error(error)
      }
    },
    logout() {
      this.userToken = null
      localStorage.removeItem('userToken')

      router.push('/')
    }
  }
})

export default useAuthStore
