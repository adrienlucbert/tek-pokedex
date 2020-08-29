import config from '@/config'

export default {
    state: {
        jwt: null,
        user: null
    },
    getters: {
        isLoggedIn(state) {
            return state.jwt != null 
        },
        user(state) {
            return state.user
        }
    },
    mutations: {
        LOGIN(state, { jwt, user }) {
            state.jwt = jwt
            state.user = user
        },
        LOGOUT(state) {
            state.jwt = null
            state.user = null
        }
    },
    actions: {
        login({ commit }, query) {
            return fetch(`${config.STRAPI_URL}/auth/microsoft/callback${query}`)
                .then(res => {
                    if (res.status !== 200)
                        throw new Error(`Failed to login`)
                    return res
                })
                .then(res => res.json())
                .then(({ jwt, user }) => {
                    if (!user.team)
                        throw new Error(`User belongs to no team`)
                    commit('LOGIN', { jwt, user })
                    return user
                })
        },
        logout({ commit }) {
            commit('LOGOUT')
        }
    }
}
