<template>
    <div class="w-5/6 flex flex-row gap-5 flex-wrap justify-center my-5">
        <div v-for="(product, i) in products" :key="i" class="w-60 h-90 border-1 border-gray-400 rounded-lg">
            <div class="h-3/6 bg-gray-400 rounded-t-lg flex items-center justify-center text-white font-semibold">
                <img v-if="product.image" :src="product.image.url" class="h-full w-full object-cover ">
                <p v-else>Sem imagem</p>
            </div>
            <div class="h-auto p-3 flex flex-col gap-5">
                <div class="w-full flex flex-col justify-center items-center">
                    <p class="text-lg text-gray-900 font-semibold">{{ product.name }}</p>
                    <p class="font-semibold text-gray-800">R$ {{ product.price }}</p>
                    <p class="text-sm text-center py-1 text-gray-800">{{ shortDescription }}</p>
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
import { computed } from 'vue';

const description = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit';

const shortDescription = computed(() => {
    return description.length > 60 ? description.slice(0, 60) + '...' : description
});
const emit = defineEmits(['validateCartItem'])
const props = defineProps({
    products: Array
})

function addToCart(i) {
    emit('validateCartItem', props.products[i]);
}
</script>
