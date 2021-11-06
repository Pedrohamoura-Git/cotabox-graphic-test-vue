/** @format */

import { createStore } from 'vuex'
import membersList from './modules/membersList/membersList'
import chartData from './modules/chartData/chartData'

const store = createStore({
  modules: {
    membersList,
    chartData,
  },
})

export default store
