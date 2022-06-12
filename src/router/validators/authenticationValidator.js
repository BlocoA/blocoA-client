import useAuthStore from '@/stores/authStore'

async function authenticationValidator({ path }) {
  const publicPages = ['/']
  const authRequired = !publicPages.includes(path)
  const auth = useAuthStore()

  if (authRequired && !auth.userToken) {
    return '/'
  }
}

export default authenticationValidator;
