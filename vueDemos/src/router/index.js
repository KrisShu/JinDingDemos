import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/index.vue'
import homeIndex from "../views/home/home-index.vue";
import contentRouter from './content'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect: "/home-index",
    meta: {
      title: "首页"
    },
    children:[
      {
        path: "home-index",
        name: "home-index",
        component: homeIndex,
        meta: {
          title: "首页",
          affix: true
        }
      },
      ...contentRouter,
    ]
  },

 
]

const router = new VueRouter({
  routes
})

export default router
