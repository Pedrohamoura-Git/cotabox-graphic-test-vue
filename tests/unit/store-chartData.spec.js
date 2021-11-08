/** @format */

import { setInLocalStorage } from '@/utils/localStorage/index'
import { createStore } from 'vuex'

// function factory() {
//   const store = createVuexStore()
//   return mount(App, {
//     global: {

//     }
//   })
// }

describe('store-chartData', () => {
  test('Add new section', () => {
    const store = createStore({
      state: {
        sections: [],
      },
      mutations: {
        SET_NEW_SECTION(state, payload) {
          state.sections.push(payload)
        },
        SET_ALL_SECTIONS(state, payload) {
          state.sections = payload
        },
      },
      actions: {
        ADD_NEW_SECTION({ commit, dispatch }, section) {
          commit('SET_NEW_SECTION', section)
          dispatch('SET_SECTIONS_LOCAL_STORAGE')
        },
        ADD_ALL_SECTIONS({ commit, dispatch }, sections) {
          commit('SET_ALL_SECTIONS', sections)
          dispatch('SET_SECTIONS_LOCAL_STORAGE')
        },
        SET_SECTIONS_LOCAL_STORAGE({ state }) {
          setInLocalStorage(state.sections, 'sections')
        },
      },
    })

    store.dispatch('ADD_NEW_SECTION', { name: 'A', lastName: 'B', value: '21' })
    // store.dispatch('ADD_ALL_SECTIONS', { name: 'C', lastName: 'D', value: '42' })
    // store.dispatch('SET_SECTIONS_LOCAL_STORAGE')

    expect(store.state.sections).toHaveLength(1)
    // expect(store.state.sections).toHaveLength(1)
    // expect(setInLocalStorage).toBeCalledTimes(1)
  })
})
