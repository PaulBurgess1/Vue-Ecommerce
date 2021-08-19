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
          <div class="col-sm table-responsive-sm gx-0 checkout">
              
                <table class="table align-middle table-sm table-striped">
                    <thead>
                        <tr class="table-success">
                            <th colspan="2"><h3><b>Cart Details</b></h3></th>
                        </tr>
                        
                    </thead>
                    <tbody class="w-50%">
                        <tr>
                            <th>Subtotal</th>
                            <td>$ {{total}}</td>
                        </tr>
                        <tr>
                            <th>HST</th>
                            <td>$ {{(total*HST).toFixed(2)}}</td>
                        </tr>
                        
                        <tr>
                            <th>Base Shipping</th>
                            <td>$ {{BASE_SHIPPING}}</td>
                        </tr>
                        <tr>
                            <th>Total</th>
                            <td v-if="total > 0">$ {{final_total}}</td>
                            <td v-else>$ 0.00</td>
                        </tr>
                    </tbody>
                </table>
                <div class="checkout-footer">
                    <button  class="btn btn-lg btn-warning" v-bind:disabled="cart.length==0">
                        Proceed to Checkout
                    </button>
                </div>
                
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
        total:0.0,
        HST:0.13,
        BASE_SHIPPING:20.00,
        final_total: 0.0,
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
            this.final_total = (parseFloat(this.total) + parseFloat(this.total * this.HST) + parseFloat(this.BASE_SHIPPING)).toFixed(2);
        },
        removeFromCart(itemId) {
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            const index = cartItems.findIndex(({ id }) => id === itemId);
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem("cart"));
            this.subtotal=0.0;
            for (let item in this.cart) {

                //console.log(this.cart[item].price);
                this.total= parseFloat(this.total) + parseFloat(this.cart[item][0].price*(1-this.cart[item][0].sale))*this.cart[item][1];
                this.total=parseFloat(this.total).toFixed(2);
            }
            this.final_total = (parseFloat(this.total) + parseFloat(this.total * this.HST) + parseFloat(this.BASE_SHIPPING)).toFixed(2);
            window.dispatchEvent(new CustomEvent('cartUpdate', {
                    detail: {
                        storage: JSON.parse(localStorage.getItem('cart')).length
                    }
                    }));
        },
        clearCart(){
            localStorage.setItem("cart", JSON.stringify([]));
            this.total=0.0;
            this.subtotal=0.0;
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
    padding:1rem;
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
.checkout{
    display: inline;
    justify-content: center;
    align-items: center;
    align-content: center;
    margin:auto;
    margin-right: 1rem;
    
    
    border: 1px solid rgba(255, 255, 255, 0.2);;
    border-radius: 1rem 1rem 1rem 1rem;
    background-color: hsl(210, 10%, 70%);
    box-shadow: 0.5rem 0.5rem 0.5rem rgba(0, 0, 0, 0.25);
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
    .cart-items{
        padding:0;
    }
    .cart-item-thumbnail{
        display: none;
    }
}
</style>