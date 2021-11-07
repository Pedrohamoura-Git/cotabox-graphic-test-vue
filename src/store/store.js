/** @format */

import { createStore } from 'vuex'
import membersList from './modules/membersList/membersList'
import chartData from './modules/chartData/chartData'
import themeSwicher from './modules/themeSwicher/themeSwicher'
const store = createStore({
  modules: {
    membersList,
    chartData,
    themeSwicher,
  },
})

export default store
