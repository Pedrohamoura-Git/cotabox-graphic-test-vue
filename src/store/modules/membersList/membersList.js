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
    },
    mutations: {
        SET_NEW_MEMBER(state, payload) {
            state.membersList.push(payload)
        },
    },
    actions: {
        SET_NEW_MEMBER({ commit }, member) {
            commit('SET_NEW_MEMBER', member)
        },
    },
}

export default membersList
