import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        { path: '/login', alias: '/', name: 'login', component: () => import('@/pages/login') },
        { path: '/logout', name: 'logout', component: () => import('@/pages/logout') },
        { path: '/ranking', name: 'ranking', component: () => import('@/pages/ranking') },
        { path: '/challenges', name: 'challenges', component: () => import('@/pages/challenges') },
        { path: '*', name: '404', component: () => import('@/pages/404') }
    ]
})

router.beforeEach((to, from, next) => {
    if (!store.getters.isLoggedIn && to.path !== '/login') {
        if (from.path !== '/login')
            router.push('login')
        return
    }
    next()
})

export default router
