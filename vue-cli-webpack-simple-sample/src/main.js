import Vue from 'vue'
import Home from './Home.vue'
import App from './App.vue'

Vue.component('home-component', Home)

new Vue({
  el: '#app',
  render: h => h(App)
})
