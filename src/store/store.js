/** @format */

import { createStore } from 'vuex'
import membersList from './modules/membersList/membersList'
import chartData from './modules/chartData/chartData'
import themeSwitcher from './modules/themeSwitcher/themeSwitcher'
const store = createStore({
  modules: {
    membersList,
    chartData,
    themeSwitcher,
  },
})

export default store
