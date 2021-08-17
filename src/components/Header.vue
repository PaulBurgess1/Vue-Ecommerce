<template>
  <div class="header-container">
    <!--Row-->
    <div class="row">
        <div class="header-title col-8">
          <router-link to="/">
            <i class="fas fa-frog"></i>
            <span> Paul's Pet Store</span> 
          </router-link>
        </div>
        <div class="header-login col-4">
          <router-link to="/Cart" class="header-cart">
            <span v-if="cart_size>0" class="cart-size" >
               <p v-bind:data-size="cart_size">{{cart_size}}</p>
            </span>
            <i class="fas fa-shopping-cart"></i>
          </router-link>
          <div class="header-nolog" v-if="name===''">
            <router-link class="btn btn-success" to="/Login"><i class="fas fa-user"></i>  Login</router-link>
            <router-link class="btn btn-warning" to="/Registration"><i class="fas fa-user-plus"></i>  Sign Up</router-link>
          </div>
          <div class="header-log" v-else>
            <span><i class="fas fa-smile-beam"></i> Welcome, {{name}}.</span>
            <button @click="logoutHandle" class="btn btn-danger"><i class="fas fa-sign-out-alt"></i> Logout</button>
          </div>
        </div>
    </div>
    <!--Row-->
    <div class="row">
      <div class="header-categories col-12">
        <span @click="resetFilter" class="category-btn">
          <i class="fas fa-bars"></i>
          All
        </span>
        <span @click="categoryFilter(category)" class="category-btn" v-for="category in CATEGORIES" :key="category">
          {{category}}
        </span>
        
      </div>
    </div>
    <!--Row-->
    <div class="row">
      <div class="header-subcategories col-12">
        <span @click="subcategoryFilter(sub_cat)" class="category-btn" v-for="sub_cat in SUB_CATEGORIES" :key="sub_cat">
          {{sub_cat}}
        </span>
      </div>
    </div>



  </div>
</template>


<!--Script-->
<script>
import {ref, onBeforeMount, onUpdated} from 'vue';
import firebase from 'firebase';

export default {
  name: 'Header',
   data(){
    return {
      //Hard coded due to the list having little room for change or addition.
      CATEGORIES: ["Pet", "Food", "Terrarium", "Habitat Decor", "Lighting/Heating"],
      //Hard coded for now may change in the future.
      SUB_CATEGORIES: ["Amphibian", "Frog", "Reptile", "Turtle/Tortoise", "Snake"],
      cart_size: 0
    }
  },
  methods:{
    getCart() {
      if (!localStorage.getItem("cart")) {
        localStorage.setItem("cart", JSON.stringify([]));
      }
      this.cart = JSON.parse(localStorage.getItem("cart"));
      this.cart_size=this.cart.length;
    },
    categoryFilter(category_filter){
      window.dispatchEvent(new CustomEvent('productFilterCategory', {
                    detail: {
                        filter: category_filter
                    }
                    }));
    },
     subcategoryFilter(subcategory_filter){
      window.dispatchEvent(new CustomEvent('productFilterSubcategory', {
                    detail: {
                        filter: subcategory_filter
                    }
                    }));
    },
    resetFilter(){
      window.dispatchEvent(new CustomEvent('resetFilter', {
                    }));
    }
  },
  beforeMount() {
    this.getCart();
    window.addEventListener('cartUpdate', (event) => {
    this.cart_size = event.detail.storage;
  });
  },
  
  updated(){
    this.cart_size=JSON.parse(localStorage.getItem("cart")).length;
  },
  watch: {
  localStorage() {
    this.cart_size=JSON.parse(localStorage.getItem("cart")).length;
  }
  },
  setup(){
    
    var name =ref("");
    let user =firebase.auth().currentUser;
    onBeforeMount(()=>{
      user =firebase.auth().currentUser;
      //console.log("user "+user);
      if(user){
        name.value=user.email.split('@')[0]
      }
      //console.log(name.value)
    });
    onUpdated(()=>{
      user =firebase.auth().currentUser;
      //console.log("user "+user);
      if(user){
        name.value=user.email.split('@')[0]
      }
      //console.log(name.value)
    });
    const logoutHandle =() =>{
      firebase.auth()
      .signOut()
      .then(() => name.value="")
      .catch(err => alert(err.message));
    }
    firebase.auth().onAuthStateChanged((user)=>{
        user =firebase.auth().currentUser;
        //console.log("user "+user);
        if(user){
          name.value=user.email.split('@')[0]
        }
        //console.log(name.value)
      })
    

    return{
      logoutHandle,
      name
    }
  },
}
</script>

<style>
  .header-container{
    background-color: var(--clr-bg-hf);
    color: var(--clr-text);
    align-content: center;
  }
  .header-title{
    background-color: var(--clr-bg-hf);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2.5rem;
    
   
  }
  .header-title a{
    text-decoration:none;
  }
  .header-title span, .header-title i{
    background-image: 
      linear-gradient(25deg, var(--clr-primary), var(--clr-secondary));
    background-clip: text;
    color: transparent;
    
  }
  .header-login{
    background-color: var(--clr-bg-hf);
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding: auto;
    
  }
  .header-cart{
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-decoration: none;
    color: var(--clr-text);
    margin:auto;
    padding: auto;
  }
  .cart-size{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
    background-color: red;
    border-radius: 50%;
    font-size:1rem;
    width: 30px;
    height: 30px;
    line-height: 30px;
  }
  .cart-size p{
    content: attr(data-size);
  }
  .header-nolog .btn{
    margin: auto 0.3rem;
  }
  .header-log .btn{
    margin: auto 0.3rem;
  }
  .header-log:first-of-type{
    font-size:2rem;
  }
  .header-log span{
    font-size: 1.2rem;
    margin: 0 0.3rem;
  }
  /*categories*/
  .header-categories{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2rem;
    background-color: 	var(--clr-bg-hf-secondary);
    border-bottom: 1px solid black;
    overflow-x: scroll;
  }
  .category-btn{
    background-color: 	var(--clr-bg-hf-btn);
    padding: 0.15rem;
    border-radius: 0.4rem;
    border: 1px solid transparent;
    margin-right: 0.6rem;
    white-space: nowrap;
  }
  .category-btn:hover{
    background-color: 	hsl(210, 10%, 55%);
    cursor: pointer;
    border: 1px solid var(--clr-text);
  }
  .header-subcategories{
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: 	hsl(210, 10%, 35%);
    border-bottom: 1px solid black;
    overflow-x: scroll;
    min-height: 2rem;
  }
  .header-categories::-webkit-scrollbar, .header-subcategories::-webkit-scrollbar {
    display: none;
  } 
  /*Media Queries*/
    @media(max-width: 30rem){
    .header-title{
      font-size: 2rem;
      justify-content: flex-start;
      white-space: nowrap;
    }
    .header-title span{
      font-size: 1.3rem;
      justify-content: flex-start;
    }
    .btn{
      
      padding:2px;
      font-size: 1rem;
    }
    .header-nolog .btn i{
      display: none;
    }
    .header-nolog .btn:last-child{
      display: none;
    }
    .header-cart > *{
      font-size: 1.5rem;
      padding-right: 0.1rem;
    }
    .cart-size{
      font-size:0.9rem;
      width: 20px;
      height: 20px;
      line-height: 20px;
    }
    .header-nolog, .header-log{
      display:inline;
    }
    .header-log span, .header-log i{
      display: none;
    }
    .header-categories, .header-subcategories{
      font-size: 95%;
      justify-content: flex-start;
    }
    .category-btn{
      padding: auto;
    }
    .header-categories::-webkit-scrollbar, .header-subcategories::-webkit-scrollbar {
      display: default;
    }

}
</style>