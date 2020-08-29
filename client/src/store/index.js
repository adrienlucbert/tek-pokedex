import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

import modules from '@/store/modules'

const store = new Vuex.Store({
    modules,
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
})

export default store
