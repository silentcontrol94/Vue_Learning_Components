<template>
  <div class="wcol-md-6">
    <h3>Child Component 1</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir Child componentim</p>
    <p>Parentten Gelen Kullanıcı Yaşı: {{ age }} </p>
    <button></button>
  </div>
</template>
<script>
import {eventBus} from "../main"
export default {
  props : ["age"],
  methods: {
  },
  created(){
      eventBus.$on("ageEdited", (age)=>{
        this.age = age
      })
    }
}
</script>
<style scoped>
  div {
    background-color: lightcoral;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>
