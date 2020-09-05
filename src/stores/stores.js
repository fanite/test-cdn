/**
 * It allows you to pass in a directory to search, 
 * a flag indicating whether subdirectories should be searched too, 
 * and a regular expression to match files against.
 * document: https://webpack.js.org/guides/dependency-management/#requirecontext
 */
const files = require.context('./common', true, /\.js$/)
const modules = {}

files.keys().forEach(key => {
  modules[key.replace(/(\.\/|\.js)/g, '').replace('/', '.')] = files(key).default
})

export default {
  namespaced: true,
  modules
}