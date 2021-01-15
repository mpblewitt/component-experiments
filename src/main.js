import Vue from 'vue'
import App from './App.vue'
import {ThemeProvider} from 'vue-styled-components'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  components: {
    'theme-provider': ThemeProvider
  },
}).$mount('#app')
