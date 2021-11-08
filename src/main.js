/** @format */

import { createApp } from 'vue'

// Modules & Components
import App from './App.vue'
import store from './store/store'

// Dependencies
import Donut from 'vue-css-donut-chart'
import 'vue-css-donut-chart/dist/vcdonut.css'

createApp(App).use(store).use(Donut).mount('#app')
