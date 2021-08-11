<template>
  <div class="home" >
    
    <div class="no-db" v-if="products.length===0"> 
      Error with database, no products 
    </div>
    <div class="card-deck product-list" v-for="product in products.products" :key="product.id">
      
      <div class="card product-item">
        <router-link  :to="{ name: 'Product', params: {id: product.id} }">
          <img class="card-img-top" v-bind:src="product.imgurl">
          <div class="card-body">
            <h5 class="card-title"><b>{{product.name}}</b></h5>
            <p class="card-text">Category: {{product.category}}</p>
            <p class="card-text">{{product.desc.substring(0, 50)}}...</p>
            <div class="card-footer">
              <h5 v-if="product.stock===0"><span>Out Of Stock</span></h5>
              <h5 v-else-if="product.sale===0.0">$ {{product.price}}</h5>
              <h5 v-else><s>$ {{product.price}}</s> <span>$ {{(product.price*(1-product.sale)).toFixed(2)}}</span></h5>
            </div>
            
          </div>
        </router-link>
      </div><!--Item-->
      
    </div><!--List-->
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'Home',
  
  data(){
    return {
      PROJECT_ID: 'vue-ecommerce-9da31-default-rtdb',
      query:'',
      products:[]
    }
  },
  methods:{
    setProducts (data){
      if(data){
        this.products = data[0];
      }
    },
    
    
  },//methods
  //Pre-load
  mounted () {
      console.log("mounting");
      let q= "https://"+this.PROJECT_ID+".firebaseio.com/products/.json";
      try {
        fetch(q)
        .then(res => {
          if (res.status == 200){
              let data =res.json();
              return data;
            }
            else{
              alert("Error "+res.status+": "+res.statusText);
              return;
            }
        })
        .then(this.setProducts);
      } catch (error) {
        alert(error.message);
      }
      console.log(this.products);
    },
}
</script>