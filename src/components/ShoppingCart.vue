<template>
    <div class="w-2/4 h-auto flex flex-col my-5">
        <p class="text-2xl my-5 text-center">Carrinho de compras</p>
        <div class="flex flex-row justify-center mb-3 items-center gap-2">
            <font-awesome-icon icon="shopping-cart" class="text-xl text-gray-700" />
            <p class="px-3 rounded-2xl text-sm text-white font-bold bg-blue-400" > {{ products.filter(p => p.isInCart).length }} </p>
        </div>
        <div class="w-full h-auto my-1 flex items-center justify-center" v-for="(product, i) in products" :key="product.id">
            <div class="w-5/6 flex justify-between flex-wrap p-2 text-white font-semibold border-1 rounded border-transparent bg-blue-400" v-if="product.isInCart">
                <p>Quantidade: {{ product.quantidade }}</p>
                <div class="flex flex-row gap-5">
                    <p>Produto: {{ product.name }}</p>
                    <p>Valor: R$ {{ product.price }}</p>
                    <p>Total: R$ {{ product.price * product.quantidade }}</p>
                </div>
                <font-awesome-icon @click="removeItem(product)" icon="times" class="text-xl text-red-500 cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['removeFromCart']);
const props = defineProps({
    products: Array
});

function removeItem(product) {
    emit('removeFromCart', product);
}
</script>