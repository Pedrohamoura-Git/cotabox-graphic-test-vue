/** @format */
import { setInLocalStorage } from '../../../utils/localStorage/index'

const themeSwicher = {
  // namespaced: true,
  state: {
    activeTheme: 'light-theme',
    // activeTheme: 'teste2',
  },
  mutations: {
    SET_THEME(state, payload) {
      state.membersList.push(payload)
    },
  },
  actions: {
    TOGGLE_ACTIVE_THEME({ commit, dispatch, state }) {
      if (state.activeTheme == 'light-theme') commit('SET_THEME', 'dark-theme')
      else commit('SET_THEME', 'light-theme')
      dispatch('SET_MEMBERS_LOCAL_STORAGE')
    },
    SET_MEMBERS_LOCAL_STORAGE({ state }) {
      setInLocalStorage(state.activeTheme, 'activeTheme')
    },
  },
}
export default themeSwicher
