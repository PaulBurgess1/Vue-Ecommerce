<template>
  <div class="cart-container">
      <div class="row">
          <div class="col-lg table-responsive cart-items">
                <table class="table table-striped cart-table">
                    <thead class="table-dark">
                    <tr>
                        <th></th>
                        <th scope="col">Product</th>
                        <th scope="col">Quantity</th>
                        <th scope="col" class="text-center">Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody >
                    <tr v-for="item in cart" :key="item[0].id">
                        <td>
                            <img class="cart-item-thumbnail" v-bind:src="item[0].imgurl" v-bind:alt="item[0].name">
                        </td>
                        <td>{{item[0].name}}</td>
                        <td>{{item[1]}}</td>
                        <td>{{(item[0].price*(1-item[0].sale)).toFixed(2)}}</td>
                        <td>
                            <button class="btn btn-outline-danger" @click="removeFromCart(item[0].id)">Remove From Cart</button>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button @click="clearCart()" class="btn btn-danger btn-lg" >Clear Cart</button>
                        </td>
                    </tr>
                </tbody>
                
                </table>
                
          </div>
          <div class="col-breaker w-100"></div>
          <div class="col-sm cart-total">
                <h1>Subtotal ({{cart.length}} items) </h1>
                <h3>$ {{total}}</h3>
                <button  class="btn btn-lg btn-warning" v-bind:disabled="cart.length==0">
                    Proceed to Checkout
                </button>
          </div>

      </div>


  </div>
</template>

<script>
export default {
    name: 'Cart',
    data(){
        return {
        cart: [],
        total:0.0
        }
    },
    methods:{
        getCart() {
            this.total=0.0;
            if (!localStorage.getItem("cart")) {
                localStorage.setItem("cart", JSON.stringify([]));
            }
            this.cart = JSON.parse(localStorage.getItem("cart"));
            for (let item in this.cart) {

                //console.log(this.cart[item].price);
                this.total= parseFloat(this.total) + parseFloat(this.cart[item][0].price*(1-this.cart[item][0].sale))*parseFloat(this.cart[item][1]);
                this.total=parseFloat(this.total).toFixed(2);
            }
            console.log(this.total);
        },
        removeFromCart(itemId) {
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            const index = cartItems.findIndex(({ id }) => id === itemId);
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem("cart"));
            this.total=0.0;
            for (let item in this.cart) {

                //console.log(this.cart[item].price);
                this.total= parseFloat(this.total) + parseFloat(this.cart[item][0].price*(1-this.cart[item][0].sale))*this.cart[item][1];
                this.total=parseFloat(this.total).toFixed(2);
            }
            window.dispatchEvent(new CustomEvent('cartUpdate', {
                    detail: {
                        storage: JSON.parse(localStorage.getItem('cart')).length
                    }
                    }));
        },
        clearCart(){
            localStorage.setItem("cart", JSON.stringify([]));
            this.total=0.0;
            this.cart = [];
            window.dispatchEvent(new CustomEvent('cartUpdate', {
                    detail: {
                        storage: JSON.parse(localStorage.getItem('cart')).length
                    }
                    }));
        }

  },
  beforeMount() {
    this.getCart();
  },
}
</script>

<style>
.col-breaker{
    display: none;
}
.cart-items{
    display: inline;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin:auto;
    padding:0 1rem 0 0;
}
.cart-table{
    appearance: none;
    border: 1px solid rgba(255, 255, 255, 0.2);;
    outline: none;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
}
.cart-item-thumbnail{
    height: 2.5rem;
    width: 2.5rem;
}
/*Cart total*/
.cart-total{
    display: inline;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin:auto;

    
    border: 1px solid rgba(255, 255, 255, 0.2);;
    border-radius: 1rem 1rem 1rem 1rem;
    
    background-color: hsl(210, 10%, 55%);;
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
}
.checkout-btn{
    background-color: orange;
}
/*Media Queries*/
@media(max-width: 40rem){
    .col-breaker{
        display: flex;
    }
    .cart-table{
        width:100%;
        padding:0;
        margin:0;
        font-size: 85%;
        box-shadow: none;
    }
    .cart-item-thumbnail{
        display: none;
    }
}
</style>