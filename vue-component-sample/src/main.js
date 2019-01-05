import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('resetDataCustom', {
        age: age
      })
    },
    changeAgeToEdit(age) {
      this.$emit('changeAgeToEdit', age)
    }
  },
})

new Vue({
  el: '#app',
  render: h => h(App)
})