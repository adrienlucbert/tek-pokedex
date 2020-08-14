export default {
    state: {
        id: null,
        login: null,
        team: null,
        city: null
    },
    getters: {
        isLoggedIn(state) {
            return state.id != null
        }
    },
    mutations: {
        LOGIN(state, { id, login, team }) {
            state.id = id
            state.login = login
            state.team = team
            state.city = team.city
        },
        LOGOUT(state) {
            state.id = null
            state.login = null
            state.team = null
        }
    },
    actions: {
        login({ commit }, { id, login, team }) {
            commit('LOGIN', {
                id,
                login,
                team
            })
        },
        logout({ commit }) {
            commit('LOGOUT')
        }
    }
}
