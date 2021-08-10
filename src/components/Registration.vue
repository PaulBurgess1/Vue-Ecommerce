<template>
    <div class="form-container row">
        <div class="form-box col">
            <form class="main-form bg-dark w-auto h-auto border border-warning" action="#"  method="post">
          <ul class="list-group">
            <li class="list-group-item rounded-0 bg-warning">
              <h1 class="text-center text-dark">Sign Up!</h1>
              <p class="text-dark">Fill out all the information below to create a new account.</p>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="email"><b>Email</b></label>
              <input type="email" class="form-control" placeholder="Enter Email: " name="email" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="username"><b>User Name</b></label>
              <input type="text" class="form-control" placeholder="Enter User Name: " name="username" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="fname"><b>First Name</b></label>
              <input type="text" class="form-control" placeholder="Enter First Name: " name="fname" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="lname"><b>Last Name</b></label>
              <input type="text" class="form-control" placeholder="Enter Last Name: " name="lname" required>
            </li>
            <li class="list-group-item bg-dark">
              <label class="d-block" for="pword"><b>Password</b></label>
              <input type="password" class="form-control" placeholder="Enter Password: " name="pword" required>
            </li>
            <li class="list-group-item bg-dark border border-warning">
              <button class="btn btn-warning btn-lg w-50" type="submit"><b>Sign Up</b></button>
              <div class="col">
                <h5>Or Sign Up Using</h5>
                <a class="btn btn-primary button-circle btn-floating m-1"
                    style="background-color: #3b5998;"
                    href="#!"
                    role="button">
                    <i class="fab fa-facebook"></i>
                </a>
                <a class="btn btn-primary button-circle btn-floating m-1"
                    style="background-color: #55acee;"
                    href="#!"
                    role="button">
                    <i class="fab fa-twitter"></i>
                </a>
                <a class="btn btn-primary button-circle btn-floating m-1"
                    style="background-color: #dd4b39;"
                    href="#!"
                    role="button">
                    <i class="fab fa-google"></i>
                </a>
              </div>
              <h5 class="mt-2">Already Have an Account?</h5>
              <a href="login.html" class="btn btn-success btn-lg">Login</a>
            </li>
          </ul>
        </form>
        </div>
    </div>
    
</template>

<script>
export default {
  name: 'Registration',
}
</script>

<style>
    
</style>