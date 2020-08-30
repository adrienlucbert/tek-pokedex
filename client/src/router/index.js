import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'

Vue.use(Router)

const DEFAULT_ROUTE = '/ranking'

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/auth/login',
            name: '/auth/login',
            component: () => import('@/pages/login')
        },
        {
            path: '/auth/microsoft/redirect',
            name: '/auth/microsoft/redirect',
            component: () => import('@/pages/loginRedirect')
        },
        {
            path: '/auth/logout',
            name: '/auth/logout',
            component: () => import('@/pages/logout')
        },
        {
            path: '/ranking',
            name: '/ranking',
            component: () => import('@/pages/ranking')
        },
        {
            path: '/challenges',
            name: '/challenges',
            component: () => import('@/pages/challenges')
        },
        {
            path: '*',
            name: '404',
            component: () => import('@/pages/404')
        }
    ]
})

router.beforeEach((to, from, next) => {
    if (!store.getters.isLoggedIn && !to.path.startsWith('/auth/')) {
        router.push('/auth/login')
        return
    } else if (to.path === '/') {
        router.push(DEFAULT_ROUTE)
        return
    }
    next()
})

export default router
