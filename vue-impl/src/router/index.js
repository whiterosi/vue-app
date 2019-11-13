import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(Router)

const base = `${process.env.BASE_URL}`
const router = new Router({
  mode: 'history',
  base: base,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  // 做些什么，通常权限控制就在这里做哦

  // 必须写next()哦，不然你的页面就会白白的，而且不报错，俗称"代码下毒"
  next();
});

export default router;