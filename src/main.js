import Vue from 'vue';
import { ThemeProvider } from 'vue-styled-components';
import App from './App.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  components: {
    'theme-provider': ThemeProvider,
  },
}).$mount('#app');
