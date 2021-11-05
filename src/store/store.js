/** @format */

import { createStore } from 'vuex'
import membersList from './modules/membersList/membersList'

const store = createStore({
  modules: {
    membersList,
  },
})

export default store
