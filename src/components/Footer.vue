<template>
  <div class="footer-box row">
      <div class="col-8">
          <h1>Footer</h1>
          <div>This is a project by Paul Burgess</div>
      </div>
      

      <div class="footer-links col-4">
          
          <ul  class="list-unstyled">
              <li>
                  <h5> Check Me Out!</h5>
                </li>
              <li>
                <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #0082ca;"
                    href="https://www.linkedin.com/in/paul-m-burgess/"
                    role="button">
                    <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li>
                <a
                    class="btn btn-primary btn-floating m-1"
                    style="background-color: #333333;"
                    href="https://github.com/PaulBurgess1/"
                    role="button">
                    <i class="fab fa-github"></i>
                </a>
              </li>
          </ul>
      </div>
  </div>
   
</template>


<!--Script-->
<script>

export default {
  name: 'Footer',
}
</script>

<style>
    .footer-box{
        background-color: var(--clr-bg-hf);
        color: var(--clr-text);
        padding-top:1rem;
    }
</style>