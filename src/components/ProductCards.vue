<template>
    <div class="w-5/6 flex flex-row gap-5 flex-wrap justify-center my-5">
        <div v-for="(product, i) in products" :key="i" class="w-60 h-80 border-1 border-gray-400 rounded-lg">
            <div class="h-3/5 bg-gray-400 rounded-t-lg flex items-center justify-center text-white font-semibold">
                Imagem do produto
            </div>
            <div class="h-2/5 p-3 flex flex-col gap-7">
                <div class="w-full flex flex-col justify-center items-center">
                    <p class="text-lg text-gray-900 font-semibold">{{ product.name }}</p>
                    <p class="font-semibold text-gray-800">R$ {{ product.price }}</p>
                </div>
                <div class="flex justify-between">
                    <button @click="addToCart(i)" class="bg-blue-400 text-white text-sm font-semibold py-1 px-3 rounded-xl cursor-pointer">Comprar</button>
                    <font-awesome-icon icon="heart" class="text-white drop-shadow-[0_0_1px_rgba(0,0,0,0.9)] text-lg cursor-pointer" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const emit = defineEmits(['validateCartItem'])
const props = defineProps({
    products: Array
})

function addToCart(i) {
    emit('validateCartItem', props.products[i]);
}
</script>
