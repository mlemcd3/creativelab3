import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ticTacToe from './components/Game';
import Cell from './components/Cell';

Vue.config.productionTip = false
Vue.component('ticTacToe', ticTacToe);
Vue.component('cell', Cell);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
