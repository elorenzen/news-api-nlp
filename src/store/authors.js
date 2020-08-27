const state = {
    authors: {}
}

const mutations = {
    setAuthors (state, payload) {
        state.authors = { ...payload }
    }
}

const actions = {
    setAuthors ({ commit }, payload) {
        commit('setAuthors', payload)
    }
}

const getters = {
    authors: (state) => {
        return state.authors
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}