<template>
  <div class="container">
    <Header></Header>
    <Registration style="display: none;"></Registration>
    <Login></Login>
    <HelloWorld style="display: none;"/>
    <Footer></Footer>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Login from './components/Login.vue'
import Registration from './components/Registration.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    Login,
    Registration,
    HelloWorld
  }
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
</style>
