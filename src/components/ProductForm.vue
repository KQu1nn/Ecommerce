<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <h2 class="text-2xl pb-9">Adicionar produto</h2>
        <form class="w-2/5 flex flex-col items-center gap-2" @submit.prevent="send">
            <input class="w-72 h-9 px-3 outline-0 text-sm border-1 border-gray-200"
            v-model="productName" type="text" placeholder="Nome do produto..">

            <input class="w-72 h-9 px-3 outline-0 text-sm border-1 border-gray-200"
            v-model="productPrice" type="number" placeholder="Preço..">

            <button class="border-1 p-2 bg-blue-400 text-sm font-semibold text-white cursor-pointer">Cadastrar Produto</button>
            <p v-if="userFeedback" :class="['text-sm mt-2', userFeedbackType === 'success' ? 'text-green-500' : 'text-red-500']">{{ userFeedback }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const productName = ref('');
const productPrice = ref(null);
const isInCart = ref(false);
const userFeedback = ref('');
const userFeedbackType = ref('');
const emit = defineEmits(['submitProduct']);

function send() {
    if(!productName.value || !productPrice.value) {
        userFeedback.value = 'Por favor, preencha todos os dados!';
        userFeedbackType.value = 'error'
        return;
    } else {
        emit('submitProduct', {
            name: productName.value,
            price: productPrice.value,
            isInCart: isInCart.value
        });

        userFeedback.value = 'Produto adicionado com sucesso!';
        userFeedbackType.value = 'success';
    }
    resetFields();
    resetUserFeedback();
}
function resetFields() {
    productName.value = '';
    productPrice.value = '';
}
function resetUserFeedback() {
    setTimeout(() => {
        userFeedback.value = '';
    }, 3000)
}
</script>