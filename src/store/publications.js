const state = {
    publications: {}
}

const mutations = {
    setPublications (state, payload) {
        state.publications = { ...payload }
    }
}

const actions = {
    setPublications ({ commit }, payload) {
        commit('setPublications', payload)
    }
}

const getters = {
    publications: (state) => {
        return state.publications
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}