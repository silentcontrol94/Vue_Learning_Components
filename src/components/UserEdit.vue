<template>
  <div class="col-md-s6">
    <h3>Child Component 2</h3>
    <p>Ben User.vue isimli Parent Component'in içerisindeki bir diğer Child componentim</p>
    <p>Parentten Gelen Kullanıcı Yaşı: {{ age }} </p>
    <button @click="changeAge">Yaşı Değiştir.</button>
  </div>
</template>
<script>
import {eventBus} from "../main"
export default{
  data() {
    return {
      
    }
  },
 props : ["age"],
 methods: {
   changeAge(){
    this.age = 45;
    //this.$emit("ageEdited",this.age)
    //eventBus.$emit("ageEdited", this.age)
    eventBus.berke(this.age)
   }
 },
}
</script>

<style scoped>
  div {
    background-color: lightgoldenrodyellow;
    padding: 20px;
    border: 1px solid #666;
    display: inline-block;
  }
</style>

