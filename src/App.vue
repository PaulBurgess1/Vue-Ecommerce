<template>
  <div class="container-fluid">
    <Header></Header>
    <router-view/>
    
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
 
}
</script>

<style>
:root {
    --clr-primary: green;
    --clr-secondary: greenyellow;

    --clr-bg: hsl(210, 10%, 80%);
    --clr-bg-hf: 	hsl(210, 10%, 23%);
    --clr-bg-hf-secondary: hsl(210, 10%, 35%);
    --clr-bg-hf-btn: hsl(210, 10%, 45%);

    --clr-text: azure;
}
#app {
  /*For Accessability*/
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: var(--clr-text);
  background-color: var(--clr-bg);
}
/*Login & Registration*/
.form-container{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--clr-bg);
        color: var(--clr-text);
        align-content: center;
        padding: 0;
    }
    .form-box{
        padding: 0;
    }
    .main-form{
        max-width: max-content;
        margin: 0;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;

        color:var(--clr-text);
    }
    .main-form .list-group li:first-of-type{
        color:var(--clr-text);
    }
    .main-form label{
        color:var(--clr-text);
        text-align: left;
    }
    .main-form h5{
        color:var(--clr-text);
    }
    .main-form .list-group li:last-of-type button{
        padding-top: 1rem;
        padding-bottom: 1rem;
        margin-bottom: 1rem;
    }
    /*Home and product*/
    .no-db{
  border: 1px solid red;
}
.product-list{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  padding:1rem 1rem;
}
.product-item{
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-content: center;


  appearance: none;
  border: 1px solid rgba(255, 255, 255, 0.2);;
  border-radius: 0rem 0rem 1rem 1rem;
  outline: none;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
}
.product-item a{
  text-decoration: none;
}
.product-item img{
  max-height: 17rem;
}
.card-footer span{
  color: red;
}
</style>
