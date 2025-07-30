<template>
  <main>
    <ProductForm
      class="w-full h-full flex flex-col"
      @submitProduct="handleProduct"
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

console.log(products.value)
</script>