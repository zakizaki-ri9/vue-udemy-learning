import Vue from 'vue'
import Component from './MyComponent.vue'
import App from './App.vue'

Vue.component('comp', Component)

new Vue({
  el: '#app',
  render: h => h(App)
})
