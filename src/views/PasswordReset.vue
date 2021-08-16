<template>
  <div class="form-container row">
        <div class="form-box col">
            <form @submit.prevent="resetHandle" class="main-form bg-dark w-auto h-auto border border-primary">
                <ul class="list-group">
                    <li class="list-group-item rounded-0 bg-primary">
                        <h1 class="text-center">Password Reset</h1>
                        <p>Enter your Email and a password reset Email will be sent to you.</p>
                    </li>
                    <li class="list-group-item bg-dark">
                        <label class="d-block" for="email"><b>Email</b></label>
                        <input type="email" v-model="email" class="form-control" placeholder="Enter Email: " name="email" required>
                    </li>
                    <li class="list-group-item bg-dark border border-primary">
                        <button class="btn btn-primary btn-lg w-50" type="submit"><b>Reset Password</b></button>
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
    name: 'PasswordReset',
    setup(){
        const email = ref("");
        //console.log(email.value)
        const resetHandle = () =>{
            firebase.auth().sendPasswordResetEmail(email.value)
            .then(() => {
                alert("Password reset email sent!");
            })
            .catch((error) => {
                alert(error.message);
            });

        }
        return{
            resetHandle,
            email
    }
    }
    
}
</script>

<style>

</style>