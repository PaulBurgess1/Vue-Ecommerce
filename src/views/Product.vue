<template>
    <div class="product-list">
        

            <div class="card product-item text-dark" style="max-width: 37rem;">
                
                <img class="card-img-top" v-bind:src="product.imgurl" >
                <div class="card-body">
                    <h3 class="card-title"><b>{{product.name}}</b></h3>
                    <p class="card-text"><b>Category: {{product.category}}</b></p>
                    <p class="card-text"><b>Subcategories: {{product.subcategories}}</b></p>
                    <p class="card-text">{{product.desc}}</p>
                <div class="card-footer">
                    <h5 v-if="product.stock===0"><span>Out Of Stock</span></h5>
                    <h5 v-else-if="product.sale===0.0">$ {{product.price}}</h5>
                    <h5 v-else><s>$ {{product.price}}</s> <span>$ {{(product.price*(1-product.sale)).toFixed(2)}}</span></h5>
                </div><!--Footer--> 
                <div v-if="product.stock>0" class="form-floating">
                    
                    <select v-model="quantity" class="form-select" id="quantity" name="quantity">
                        <option v-for="i in product.stock" :key="i" :value="i">
                            {{i}}
                        </option>
                    </select>
                    <label for="quantity">Quantity:</label>
                </div>
                <button class="btn btn-info w-50" @click="back">Back to Search</button>
                <button v-bind:disabled="product.stock===0" @click="addToCart(prod_id)" class="btn btn-warning w-50">Add to Cart.</button>
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        data(){
            return {
                prod_id: this.id,
                PROJECT_ID: 'vue-ecommerce-9da31-default-rtdb',
                product:[],
                quantity: 1
            }
        },
        methods:{
            back(){
                this.$router.go(-1)
            },
            setProduct (data){
                if(data){
                    this.product = data[this.prod_id-1];
                }
            },
            addToCart() {
                if (!localStorage.getItem("cart")) {
                    localStorage.setItem("cart", JSON.stringify([]));
                }
                const cartItems = JSON.parse(localStorage.getItem("cart"));
                cartItems.push([this.product,this.quantity]);
                localStorage.setItem("cart", JSON.stringify(cartItems));
                //this.cart = JSON.parse(localStorage.getItem("cart"));
                alert("Added to Cart");
                //Cart Update Event
                window.dispatchEvent(new CustomEvent('cartUpdate', {
                    detail: {
                        storage: JSON.parse(localStorage.getItem('cart')).length
                    }
                    }));

            },
            getCart() {
                if (!localStorage.getItem("cart")) {
                    localStorage.setItem("cart", JSON.stringify([]));
                }
                this.cart = JSON.parse(localStorage.getItem("cart"));
                this.cart_size=this.cart.length
                //alert("init");
                },
            },
        beforeMount() {
            this.getCart();
        },
    mounted () {
      //console.log("mounting");
      let q= "https://"+this.PROJECT_ID+".firebaseio.com/products/.json";
      try {
        fetch(q)
        .then(res => {
          if (res.status == 200){
              let data =res.json();
              return data;
            }
            else{
              alert("Error "+res.status+": "+res.statusText);
              return;
            }
        })
        .then(this.setProduct);
      } catch (error) {
        alert(error.message);
      }
      
    },
}
        
    
</script>

<style>
</style>