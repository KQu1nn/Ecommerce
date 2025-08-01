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
        @removeFromList="handleRemoveFromList"
      />
  </main>
</template> 

<script setup>
import { ref, computed } from 'vue';
import ProductForm from './components/ProductForm.vue';
import ProductCards from './components/ProductCards.vue';
import ShoppingCart from './components/ShoppingCart.vue';

const idCounter = ref(0);
const products = ref([])

function handleProduct(product) {
  products.value.push({
      ...product,
      id: idCounter.value++,
      quantidade: 0
    });
}
function handleCartItem(product) {
  product.isInCart = true;
  product.quantidade = (product.quantidade || 0) + 1;
}
function handleRemoveItem(product) {
  const item = products.value.find(p=> p.id === product.id);
  if(product.quantidade >= 0) {
    product.quantidade = (product.quantidade || 0) - 1;
  }
  if(product.quantidade === 0) {
    item.isInCart = false;
  }
}
function handleRemoveFromList(index) {
  products.value.splice(index, 1);
}
console.log(products.value)
</script>