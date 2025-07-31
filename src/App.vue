<template>
  <main class="w-full h-full flex flex-col items-center gap-2">
    <ShoppingCart
      :products="products"
      @removeFromCart="handleRemoveItem"
    />
    <ProductForm
        @submitProduct="handleProduct"
      />
      <ProductCards 
        :products="products"
        @validateCartItem="handleCartItem" 
      />
  </main>
</template> 

<script setup>
import { ref } from 'vue';
import ProductForm from './components/ProductForm.vue';
import ProductCards from './components/ProductCards.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const products = ref([])

function handleProduct(product) {
  products.value.push(product);
}
function handleCartItem(product) {
  product.isInCart = true;
}
function handleRemoveItem(product) {
  products.value[product].isInCart = false;
}

console.log(products.value)
</script>