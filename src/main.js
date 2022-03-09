import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { ipcRenderer } from 'electron'
import './registerServiceWorker'

Vue.config.devtools = true;
Vue.config.productionTip = false

new Vue({
  vuetify,
  ipcRenderer,
  render: h => h(App)
}).$mount('#app')
