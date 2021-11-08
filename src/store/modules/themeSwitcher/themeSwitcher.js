/** @format */
import { setInLocalStorage } from '../../../utils/localStorage/index'

const themeSwitcher = {
  namespaced: true,
  state: {
    activeTheme: 'light-theme',
  },
  mutations: {
    SET_THEME(state, payload) {
      state.activeTheme = payload
    },
  },
  actions: {
    SET_THEME({ commit, dispatch }, theme) {
      commit('SET_THEME', theme)
      dispatch('SET_THEME_LOCAL_STORAGE')
    },
    SET_THEME_LOCAL_STORAGE({ state }) {
      setInLocalStorage('activeTheme', state.activeTheme)
    },
  },
}
export default themeSwitcher
