<template>
    <div class="product-list">
        

            <div class="card product-item text-dark" style="max-width: 37rem;">
                
                <img class="card-img-top" v-bind:src="product.imgurl" >
                <div class="card-body">
                    <h5 class="card-title"><b>{{product.name}}</b></h5>
                    <p class="card-text">Category: {{product.category}}</p>
                    <p class="card-text">{{product.desc}}</p>
                <div class="card-footer">
                    <h5 v-if="product.stock===0"><span>Out Of Stock</span></h5>
                    <h5 v-else-if="product.sale===0.0">$ {{product.price}}</h5>
                    <h5 v-else><s>$ {{product.price}}</s> <span>$ {{(product.price*(1-product.sale)).toFixed(2)}}</span></h5>
                </div><!--Footer--> 
                <button class="backbtn" @click="back">Back to Search</button>
                <button class="addtocart">Add to Cart.</button>
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
                product:[]
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
        },
        mounted () {
      console.log("mounting");
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
.backbtn{
    width: 50%;
}
.addtocart{
    width: 50%;
}
</style>