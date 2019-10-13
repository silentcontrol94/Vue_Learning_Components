import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  data : {
    age : 85
  },
  methods : {
    berke(age){
      this.$emit("ageEdited",age)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
