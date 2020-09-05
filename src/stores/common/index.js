import routes from './routes'
import auth from './auth'

export default {
  namespaced: true,
  modules: {
    routes,
    auth
  }
}