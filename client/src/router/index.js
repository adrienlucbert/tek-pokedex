import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        { path: '/login', alias: '/', name: 'login', component: () => import('@/pages/login') },
        { path: '/logout', name: 'logout', component: () => import('@/pages/logout') },
        { path: '/ranking', name: 'ranking', component: () => import('@/pages/ranking') },
        { path: '/challenges', name: 'challenges', component: () => import('@/pages/challenges') },
        { path: '*', name: '404', component: () => import('@/pages/404') }
    ]
})
