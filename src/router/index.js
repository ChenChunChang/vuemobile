import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export const constantRouterMap = [
	{
		path: '/',
  		name:'Layout',
  		component: () => import('@/views/layout/index'),
  		redirect: '/bookCase',
  		children:[{
  			path: '/home',
	  		name:'Home',
	  		component: () => import('@/views/home/index'),
  		},{
        path: '/home/detail',
        name:'HomeDetail',
        component: () => import('@/views/home/detail/index'),
      },{
        path: '/bookCase',
        name:'bookCase',
        component: () => import('@/views/bookcase/index'),
      },{
        path: '/me',
        name:'Me',
        component: () => import('@/views/me/index'),
      }]
	}
]
export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})