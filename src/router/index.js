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
        name: 'Home'
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
        name: 'MenuFoods'
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
        name: 'Cart'
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
        name: 'Order'
      },
    ]
  },
  {
    path: '/payment',
    component: Layout,
    redirect: '/payment',
    children: [
      {
        path: '/',
        component: () => import('@/views/about/payment'),
        name: 'Payment'
      },
    ]
  },
  {
    path: '/about',
    component: Layout,
    redirect: '/about',
    children: [
      {
        path: '/',
        component: () => import('@/views/about/about'),
        name: 'About'
      },
    ]
  },
  {
    path: '/delivery',
    component: Layout,
    redirect: '/delivery',
    children: [
      {
        path: '/',
        component: () => import('@/views/about/delivery'),
        name: 'Delivery'
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
