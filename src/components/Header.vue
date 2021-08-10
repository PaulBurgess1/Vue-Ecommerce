<template>
  <div class="header-container">
    <!--Row-->
    <div class="row">
        <div class="header-title col-8">
          <i class="fas fa-frog"></i>
          <h1>Title</h1>
        </div>
        <div class="header-login col-4">
          <a class="header-cart">
            <span class="cart-size">
               <p>1</p>
            </span>
            <i class="fas fa-shopping-cart"></i>
          </a>
          
          <div class="header-nolog">
            <a class="btn btn-success" href=""><i class="fas fa-user"></i>  Login</a>
            <a class="btn btn-warning" href=""><i class="fas fa-user-plus"></i>  Sign Up</a>
          </div>
          <div class="header-log" style="visibility: hidden;" v-if="0">
            <span class="profile_pic"></span>
            <a class="btn btn-error" href="">Logout</a>
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
        <span class="category-btn">
          categories
        </span>
      </div>
    </div>
    <!--Row-->
    <div class="row">
      <div class="header-subcategories col-12">
        <span class="category-btn">
          sub-categories
          </span>
      </div>
    </div>



  </div>
</template>


<!--Script-->
<script>

export default {
  name: 'Header',
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
  .header-title h1, .header-title i{
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