<template>
    <div class="form-container row">
        <div class="form-box col">
        <form @submit.prevent="loginHandle" class="main-form bg-dark w-auto h-auto border border-success">
             <ul class="list-group">
            <li class="list-group-item rounded-0 bg-success">
              <h1 class="text-center">Login!</h1>
              <p>Enter your Email and Password to login</p>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="email"><b>Email</b></label>
              <input type="email" v-model="email" class="form-control" placeholder="Enter Email: " name="email" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="pword"><b>Password</b></label>
              <input type="password" v-model="pword" class="form-control" placeholder="Enter Password: " name="pword" required>
              <small id="passwordHelp" class="d-block form-text text-muted" style="text-align: left;">Forgot your password? <router-link to="/password-reset" class="link">Click here.</router-link></small>
            </li>

            <li class="list-group-item bg-dark border border-success">
              <button class="btn btn-success btn-lg w-50" type="submit"><b>Login</b></button>
              <h5>Don't Have an Account?</h5>
              <router-link to="/Registration" class="btn btn-warning btn-lg">Sign Up</router-link>
              
              <div class="col mt-3">
                <h5>Or Sign in Using</h5>
                <a @click="loginGoogle"
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #dd4b39;"
                    href="#!"
                    role="button">
                    <i class="fab fa-google"></i>
                </a>
              </div>
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
  name: 'Login',
  setup(){
    const email = ref("");
    const pword = ref("");

    const loginHandle = () =>{
      firebase.auth()
        .signInWithEmailAndPassword(email.value, pword.value)
        .then(data => {
          alert("Login Successful. Logged in as "+data.user.email)
          })
        .catch(err => alert(err.message));
    }//loginHandle
    //Bless Firebase
    const loginGoogle=() =>{
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
          alert(result.user+"Logged with Google");
        }).catch((error) => {
          alert(error.message);
        });
    }//loginGoogle
    return{
      loginHandle,
      loginGoogle,
      email,
      pword
    }
  }
}
</script>

<style>
</style>