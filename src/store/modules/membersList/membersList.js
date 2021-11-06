/** @format */

const membersList = {
    namespaced: true,
    state: {
        // membersList: [],
        membersList: [
            { name: 'Carlos', lastName: 'Moura', participation: 5 },
            // { name: 'Fernanda', lastName: 'Oliveira', participation: 15 },
            { name: 'Hugo', lastName: 'Silva', participation: 20 },
            { name: 'Eliza', lastName: 'Souza', participation: 20 },
            { name: 'Anderson', lastName: 'Santos', participation: 40 },
        ],
        availableParticipation: 0,
    },
    mutations: {
        SET_NEW_MEMBER(state, payload) {
            state.membersList.push(payload)
        },
        SET_AVAILABLE_PARTICIPATION(state, payload) {
            state.availableParticipation = payload
        },
    },
    actions: {
        SET_NEW_MEMBER({ commit }, member) {
            commit('SET_NEW_MEMBER', member)
        },
        SET_AVAILABLE_PARTICIPATION({ commit }, value) {
            commit('SET_AVAILABLE_PARTICIPATION', value)
        },
        UPDATE_AVAILABLE_PARTICIPATION({ dispatch, state }) {
            const membersParticipations = state.membersList.reduce(
                (acc, { participation }) => {
                    return acc + participation
                },
                0
            )
            const availableParticipation = 100 - membersParticipations

            dispatch('SET_AVAILABLE_PARTICIPATION', availableParticipation)
        },
    },
}

export default membersList
