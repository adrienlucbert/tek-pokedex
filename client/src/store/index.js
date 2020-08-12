import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import modules from '@/store/modules'

Vue.use(Vuex)

export default new Vuex.Store({
    modules,
    plugins: [
        new VuexPersistence({
            storage: window.localStorage
        }).plugin
    ]
})
