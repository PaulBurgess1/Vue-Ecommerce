<template>
  <div class="header-container">
    <!--Row-->
    <div class="row">
        <div class="header-title col-8">
          <router-link to="/">
            <i class="fas fa-frog"></i>
            <span> Paul's Exotic Pet Store</span> 
          </router-link>
        </div>
        <div class="header-login col-4">
          <a class="header-cart">
            <span class="cart-size">
               <p>1</p>
            </span>
            <i class="fas fa-shopping-cart"></i>
          </a>
          <div class="header-nolog" v-if="name===''">
            <router-link class="btn btn-success" to="/Login"><i class="fas fa-user"></i>  Login</router-link>
            <router-link class="btn btn-warning" to="/Registration"><i class="fas fa-user-plus"></i>  Sign Up</router-link>
          </div>
          <div class="header-log" v-else>
            <span class="profile_pic"></span>
            <span>Welcome, {{name}}</span>
            <button @click="logoutHandle" class="btn btn-error">Logout</button>
          </div>
        </div>
    </div>
    <!--Row-->
    <div class="row">
      <div class="header-categories col-12">
        <span class="category-btn">
          <i class="fas fa-bars"></i>
          All
        </span>
        <span class="category-btn" v-for="category in CATEGORIES" :key="category">
          {{category}}
        </span>
        
      </div>
    </div>
    <!--Row-->
    <div class="row">
      <div class="header-subcategories col-12">
        <span class="category-btn" v-for="sub_cat in SUB_CATEGORIES" :key="sub_cat">
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
      CATEGORIES: ["Pet", "Food", "Terrarium", "Habitat Decor", "Lighting/ Heating"],
      //Hard coded for now may change in the future.
      SUB_CATEGORIES: ["Amphibian", "Frog", "Reptile", "Turtle/ Tortoise", "Snake"],
      trigger: 0
    }
  },
  setup(){
    
    var name =ref("");
    let user =firebase.auth().currentUser;
    onBeforeMount(()=>{
      user =firebase.auth().currentUser;
      console.log("user "+user);
      if(user){
        name.value=user.email.split('@')[0]
      }
      console.log(name.value)
    });
    onUpdated(()=>{
      user =firebase.auth().currentUser;
      console.log("user "+user);
      if(user){
        name.value=user.email.split('@')[0]
      }
      console.log(name.value)
    });
    const logoutHandle =() =>{
      firebase.auth()
      .signOut()
      .then(() => name.value="")
      .catch(err => alert(err.message));
    }
    firebase.auth().onAuthStateChanged((user)=>{
        user =firebase.auth().currentUser;
        console.log("user "+user);
        if(user){
          name.value=user.email.split('@')[0]
        }
        console.log(name.value)
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
  .header-nolog .btn{
    margin: auto 0.3rem;
  }
  /*categories*/
  .header-categories{
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 2rem;
    background-color: 	var(--clr-bg-hf-secondary);
    border-bottom: 1px solid black;
  }
  .category-btn{
    background-color: 	var(--clr-bg-hf-btn);
    padding: 0.15rem;
    border-radius: 0.4rem;
    border: 1px solid transparent;
    margin-right: 0.6rem;
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
  }
  /*Media Queries*/
    @media(max-width: 30rem){
    .header-title{
      font-size: 2rem;
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
    }
    .cart-size{
      font-size:0.9rem;
      width: 20px;
      height: 20px;
      line-height: 20px;
    }
    .header-nolog{
      display:inline;
    }

}
</style>