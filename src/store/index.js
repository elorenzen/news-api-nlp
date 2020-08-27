import Vue from 'vue'
import Vuex from 'vuex'

import publications from './publications'
import authors from './authors'

Vue.use(Vuex)

export default function () {
    const Store = new Vuex.Store({
        modules: {
            publications,
            authors
        }
    })

    return Store
}