/** @format */

//* CRIAR UM ARRAY DE OBJETOS COM TODOS OS VALORES NECESSÁRIOS PARA O CHART

const sections = {
  namespaced: true,
  state: {
    sections: [],
    // sections: [
    //     { label: 'Red section', value: 25, color: 'red' },
    //     { label: 'Green section', value: 25, color: 'green' },
    //     { label: 'Blue section', value: 25, color: 'blue' }
    //   ]
  },
  mutations: {
    SET_NEW_SECTION(state, payload) {
      console.log('SET_NEW_SECTION', payload)
      state.sections.push(payload)
      console.log('SET_NEW_SECTION - state.sections', state.sections)
    },
  },
  actions: {
    SET_NEW_SECTION({ commit }, section) {
      commit('SET_NEW_SECTION', section)
    },
  },
}
export default sections
