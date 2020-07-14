import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home'),
        name: 'Home',
        meta: { title: 'Home', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu',
    children: [
      {
        path: '/',
        component: () => import('@/views/menu/index'),
        name: 'MenuFoods',
        meta: { title: 'Menu', icon: 'edit' }
      },
    ]
  },
  {
    path: '/cart',
    component: Layout,
    redirect: '/cart',
    children: [
      {
        path: '/',
        component: () => import('@/views/cart/index'),
        name: 'Cart',
        meta: { title: 'Cart', icon: 'edit' }
      },
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order',
    children: [
      {
        path: '/',
        component: () => import('@/views/order/index'),
        name: 'Order',
        meta: { title: 'Order', icon: 'edit' }
      },
    ]
  }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
