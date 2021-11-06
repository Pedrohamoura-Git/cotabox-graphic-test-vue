/** @format */

import { createApp } from 'vue'

// Modules & Components
import App from './App.vue'
import store from './store/store'

// Dependencies
import VueApexCharts from 'vue3-apexcharts'

createApp(App).use(store).use(VueApexCharts).mount('#app')
