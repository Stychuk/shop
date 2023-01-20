<template>
    <table class="txt">
            <tr>
                <th>Product ID</th>
                <th>Name</th>
                <th>Image</th>
                <th>Price</th>
            </tr>
            <tr v-for="(product, index) in products" v-bind:key="index">
                <td>{{ product.id }}</td>
                <td>{{ product.item }}</td>
                <td class="product-image"><img v-bind:src="product.src" class="img"></td>
                <td>{{ product.price }}</td>
            </tr>
        </table>
</template>

<script>
   export default {
    data() {
        return {
            products: [],
        }
    },
    mounted() {
        this.products = this.$store.getters.getCart;
    },
   }
</script>

<style>
.img{
    width: 70%;
    margin: auto;
}
.txt{
    background-color: rgb(250, 252, 149);
    font-size: 19px;
    text-align: center;
    border: 1px solid black;
    border-collapse: collapse;
}
.txt TH{
    font-weight: bold;
    padding: 5px;
    background: #00000000;
    border: 2px solid #000000;
}
.txt TD{
    padding: 5px;
    color: black;
    border: 2px solid black;
}
</style>