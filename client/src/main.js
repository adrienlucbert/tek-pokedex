import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import apolloProvider from './apollo'

import './fontawesome'
import './keybindings'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    store,
    router,
    apolloProvider,
    render: h => h(App)
})
