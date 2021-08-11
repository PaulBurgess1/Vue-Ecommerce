<template>
    <div class="product-container">
        <button @click="back">Back to Search</button>
        <div class="product">
            <h1>This is a product page</h1>
            <p>Product ID is {{ id }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['id'],
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>