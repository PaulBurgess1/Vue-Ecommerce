<template>
    <div class="form-container row">
        <div class="form-box col">
          <form class="main-form bg-dark w-auto h-auto border border-warning" @submit.prevent="registerHandle" action="#"  method="post">
          <ul class="list-group">
            <li class="list-group-item rounded-0 bg-warning">
              <h1 class="text-center text-dark">Sign Up!</h1>
              <p class="text-dark">Fill out all the information below to create a new account.</p>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="email"><b>Email</b></label>
              <input type="email" v-model="email" class="form-control" placeholder="Enter Email: " name="email" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="pword"><b>Password</b></label>
              <input type="password" v-model="pword" class="form-control" placeholder="Enter Password: " name="pword" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="pword2"><b>Password</b></label>
              <input type="password" v-model="pword2" class="form-control" placeholder="Repeat Password: " name="pword2" required>
            </li>
            <li class="list-group-item bg-dark border border-warning">
              <button class="btn btn-warning btn-lg w-50" type="submit"><b>Sign Up</b></button>
              <div class="col">
                <h5>Or Sign Up Using</h5>
                <a onclick="alert('Sorry, this part of the site is currently not finished.');"
                    class="btn btn-primary button-circle btn-floating m-1"
                    style="background-color: #3b5998;"
                    href="#!"
                    role="button">
                    <i class="fab fa-facebook"></i>
                </a>
                <a onclick="alert('Sorry, this part of the site is currently not finished.');"
                    class="btn btn-primary button-circle btn-floating m-1"
                    style="background-color: #55acee;"
                    href="#!"
                    role="button">
                    <i class="fab fa-twitter"></i>
                </a>
                <a onclick="alert('Sorry, this part of the site is currently not finished.');"
                    class="btn btn-primary button-circle btn-floating m-1"
                    style="background-color: #dd4b39;"
                    href="#!"
                    role="button">
                    <i class="fab fa-google"></i>
                </a>
              </div>
              <h5 class="mt-2">Already Have an Account?</h5>
              <router-link to="/Login" class="btn btn-success btn-lg">Login</router-link>
            </li>
          </ul>
        </form>
        </div>
    </div>
    
</template>

<script>
import {ref} from "vue";
import firebase from "firebase";

export default {
  name: 'Registration',
  setup(){
    const email = ref("");
    const pword = ref("");
    const pword2 = ref("");

    const registerHandle = () =>{
      console.log(pword.value)
      console.log(pword2.value)
      if(pword.value === pword2.value){
        firebase.auth()
        .createUserWithEmailAndPassword(email.value, pword.value)
        .then(user =>{
          alert(user);
        })
        .catch(err => alert(err.message));
        
      }
      else{
        alert("Your passwords don not match. Please enter your passwords again.");
      }

    }
    return{
      registerHandle,
      email,
      pword,
      pword2
    }
  }
}
</script>

<style>
    
</style>