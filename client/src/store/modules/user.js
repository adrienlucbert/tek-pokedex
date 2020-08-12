export default {
    state: {
        id: undefined,
        username: undefined,
        teamId: undefined
    },
    getters: {
        username(state) {
            return state.username
        },
        team(state) {
            return state.team
        }
    },
    mutations: {
        increment(state) {
            state.count++
        }
    }
}
