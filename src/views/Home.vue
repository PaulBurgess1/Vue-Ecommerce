<template>
  <div class="home" >
    
    <div class="no-db" v-if="products.length===0"> 
      <div class="no-db-box">
        <h1>
          Sorry, there are no products fitting these requirements in our database.
        </h1>
        <button @click="getProducts" class="btn btn-primary btn-lg">Reset Search</button>
      </div>
      
    </div>
    <div class="card-deck product-list" v-for="product in products" :key="product.id">
      <div class="card product-item">
        <router-link  :to="{ name: 'Product', params: {id: product.id} }">
          <img class="card-img-top" v-bind:src="product.imgurl">
          <div class="card-body">
            <h5 class="card-title"><b>{{product.name}}</b></h5>
            <p class="card-text">Category: {{product.category}}</p>
            <p class="card-text">Subcategories: {{product.subcategories}}</p>
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
//import {useRouter} from "vue-router"
export default {
  name: 'Home',
  
  data(){
    return {
      PROJECT_ID: 'vue-ecommerce-9da31-default-rtdb',
      query:'',
      products:[],
      all_products:[]
    }
  },
  methods:{
    setProducts (data){
      if(data){
        this.products = data;
        this.all_products =data;
      }
    },
    getProducts(){
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
      
    },//getProducts
    filterByCategory(filter_category){
      var newProducts=[];
      console.log(this.all_products)
      for (let idx in this.all_products){
        if(this.all_products[idx].category === filter_category){
          newProducts.push(this.all_products[idx]);
        }
      }
      this.products = newProducts;
     
    },//filterbyCategory
    filterBySubcategory(filter_category){
      var newProducts=[];
      for (let i in this.all_products){
        for(let j in this.all_products[i].subcategories){
          if(filter_category === this.all_products[i].subcategories[j]){
            newProducts.push(this.all_products[i]);
            break;
          }
        }
        
      }
      //console.log(newProducts);
      this.products = newProducts;
    },//filterbySubcategory
    
  },//methods
  //Pre-load
  mounted () {
    if(this.products.length==0){
        this.getProducts();
      }
      window.addEventListener('productFilterCategory', (event) => {
        this.$router.push({ name: "Home"})
        this.filterByCategory(event.detail.filter);
      });
      window.addEventListener('productFilterSubcategory', (event) => {
        this.$router.push({ name: "Home"})
        this.filterBySubcategory(event.detail.filter);
      });
      window.addEventListener('resetFilter', () => {
        this.$router.push({ name: "Home"})
        this.getProducts();
      });
    },
}
</script>