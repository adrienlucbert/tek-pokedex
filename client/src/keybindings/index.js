import Vue from 'vue'
import VueKeybindings from 'vue-keybindings'

const options = {
    alias: {
        cancel: ['esc'],
        next: ['arrowright'],
        prev: ['arrowleft'],
    }
}

Vue.use(VueKeybindings, options)
