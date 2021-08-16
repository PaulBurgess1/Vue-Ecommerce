<template>
  <div class="cart-container">
      <div class="row">
          <div class="col-7">
                <h1>Cart Items</h1>
                <table class="table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th class="text-center">Price</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody class="cart_list">
                    <tr class="cart-item" v-for="item in cart" :key="item.id">
                        <td>{{item.name}}</td>
                        <td>1</td>
                        <td>{{(item.price*(1-item.sale)).toFixed(2)}}</td>
                        <td>
                            <button class="btn btn-outline-danger" @click="removeFromCart(item.id)">Remove From Cart</button>
                        </td>
                    </tr>
                    <tr>
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
          <div class="col-5">
                <h1>Subtotal {{cart.length}} items </h1>
                <h3>$ {{total}}</h3>
                <button  class="checkout-btn" v-bind:disabled="cart.length==0">
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
                this.total= parseFloat(this.total) + parseFloat(this.cart[item].price*(1-this.cart[item].sale));
                this.total=parseFloat(this.total).toFixed(2);
            }
        },
        removeFromCart(itemId) {
            const cartItems = JSON.parse(localStorage.getItem("cart"));
            const index = cartItems.findIndex(({ id }) => id === itemId);
            cartItems.splice(index, 1);
            localStorage.setItem("cart", JSON.stringify(cartItems));
            this.cart = JSON.parse(localStorage.getItem("cart"));
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
</style>