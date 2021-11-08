/** @format */
import { setInLocalStorage } from '../../../utils/localStorage/index'

const membersList = {
  namespaced: true,
  state: {
    membersList: [],
    // membersList: [
    //   { name: 'Carlos', lastName: 'Moura', participation: 5 },
    //   // { name: 'Fernanda', lastName: 'Oliveira', participation: 15 },
    //   { name: 'Hugo', lastName: 'Silva', participation: 20 },
    //   { name: 'Eliza', lastName: 'Souza', participation: 20 },
    //   { name: 'Anderson', lastName: 'Santos', participation: 40 },
    // ],
    availableParticipation: 100,
  },
  mutations: {
    SET_NEW_MEMBER(state, payload) {
      state.membersList.push(payload)
    },
    SET_ALL_MEMBERS(state, payload) {
      state.membersList = payload
    },
    REMOVE_MEMBER(state, index) {
      state.membersList.splice(index, 1)
    },
    SET_AVAILABLE_PARTICIPATION(state, payload) {
      state.availableParticipation = payload
    },
  },
  actions: {
    ADD_NEW_MEMBER({ commit, dispatch }, member) {
      commit('SET_NEW_MEMBER', member)
      dispatch('SET_MEMBERS_LOCAL_STORAGE')
    },
    ADD_ALL_MEMBERS({ commit, dispatch }, members) {
      commit('SET_ALL_MEMBERS', members)
      dispatch('SET_MEMBERS_LOCAL_STORAGE')
    },
    REMOVE_MEMBER({ commit, dispatch }, index) {
      commit('REMOVE_MEMBER', index)
      dispatch('SET_MEMBERS_LOCAL_STORAGE')
    },
    SET_MEMBERS_LOCAL_STORAGE({ state }) {
      setInLocalStorage('membersList', state.membersList)
    },
    SET_AVAILABLE_PARTICIPATION({ commit }, value) {
      commit('SET_AVAILABLE_PARTICIPATION', value)
    },
    UPDATE_AVAILABLE_PARTICIPATION({ dispatch, state }) {
      const membersParticipations = state.membersList.reduce((acc, { participation }) => {
        return acc + participation
      }, 0)
      const availableParticipation = 100 - membersParticipations

      dispatch('SET_AVAILABLE_PARTICIPATION', availableParticipation)
    },
  },
}
export default membersList
