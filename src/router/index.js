import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from '../router/router'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
// router.beforeEach((to,from,next)=>{
//   console.log(to)
//   if(to.path == '/'){
//     next()
//   }
// })
export default router
