import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
// welcome 以子路由的规则形式存在home页面中
import Welcome from './components/Welcome.vue'
import Users from './components/user/Users.vue'
//导入权限列表组件页面
import Rights from './components/power/Rights.vue'
// 导入角色列表组件
import Roles from './components/power/Roles.vue'
// 导入商品分类管理组件
import Cate from './components/goods/Cate.vue'
// 导入分类参数管理组件
import Params from './components/goods/Params.vue'
// 导入商品列表组件
import GoodsList from './components/goods/List.vue'
// 导入添商品页面
import Add from './components/goods/Add.vue'
// 导入订单列表组件
import Order from './components/order/Order.vue'
// 导入数据列表组件
import Report from './components/report/Report.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/welcome',
      children: [
        { path: '/welcome', component: Welcome },
        { path: '/users', component: Users },
        { path: '/rights', component: Rights },
        { path: '/roles', component: Roles },
        { path: '/categories', component: Cate },
        { path: '/params', component: Params },
        { path: '/goods', component: GoodsList },
        { path: '/goods/add', component: Add },
        { path: '/orders', component: Order },
        { path: '/reports', component: Report }
      ]
    }
  ]
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
  // to 将要访问的路径
  // from 代表从哪个路径跳转而来
  // next 是一个函数，表示放行
  //     next()  放行    next('/login')  强制跳转

  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
