import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apolloProvider from './apollo'

import './fontawesome'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    apolloProvider,
    render: h => h(App)
})
