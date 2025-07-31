<template>
    <div class="w-2/4 h-auto flex flex-col my-5">
        <p class="text-2xl my-5">Carrinho de compras</p>
        <div class="flex flex-row mb-3 items-center gap-2">
            <font-awesome-icon icon="shopping-cart" class="text-xl text-gray-700" />
            <p class="px-3 rounded-2xl text-sm text-white font-bold bg-blue-400" > {{ products.filter(p => p.isInCart).length }} </p>
        </div>
        <div class="w-full h-auto my-1" v-for="(product, i) in products" :key="i">
            <div class="flex justify-between p-2 text-white font-semibold border-1 rounded border-transparent bg-blue-400" v-if="product.isInCart">
                <div class="flex flex-row gap-10">
                    <p>{{ product.name }}</p>
                    <p> R$ {{ product.price }}</p>
                </div>
                <font-awesome-icon @click="removeItem(i)" icon="times" class="text-xl text-red-500 cursor-pointer" />
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['removeFromCart']);
const props = defineProps({
    products: Array
});

function removeItem(i) {
    emit('removeFromCart', i);
}
</script>