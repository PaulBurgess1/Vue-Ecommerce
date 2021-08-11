<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="product-list" v-for="product in products" :key="product.id">
      <router-link :to="{ name: 'Product', params: {id: product.id} }">
        <h2>{{product.id}}</h2>
        <h3>{{product.name}}</h3>
      </router-link>


    
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return {
      products:[
      {id: 1, name:"prod1"},
      {id: 2, name:"prod2"},
      {id: 3, name:"prod3"}

  ]
    }
  }
  
}
</script>
