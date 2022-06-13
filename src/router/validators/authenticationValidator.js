import useAuthStore from '@/stores/authStore'

async function redirectIfNotLogged({ path }) {
  const publicPages = ['/']
  const authRequired = !publicPages.includes(path)
  const auth = useAuthStore()

  if (authRequired && !auth.userToken) {
    return '/'
  }
}

async function redirectIfLogged({ path }) {
  const loginPage = '/'
  const auth = useAuthStore()

  if (auth.userToken && path === loginPage) {
    return '/ambiente'
  }
}

export { redirectIfNotLogged, redirectIfLogged };
