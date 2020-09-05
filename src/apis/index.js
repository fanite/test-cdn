import { fetchRoutes } from './common/routes'
import auth from './common/auth'
import admin from './admin'

const apis = require.context(".", true, /[^(index)]\.js$/)

console.log(apis.keys())

export default {
  fetchRoutes,
  auth,
  admin
}