<template>
    <h2>Ecommerce</h2>
    <form @submit.prevent="send">
        <input v-model="productName" type="text" placeholder="Nome do produto..">
        <input v-model="productPrice" type="number" placeholder="Preço..">
        <button>Cadastrar Produto</button>
        <p v-if="userFeedback">{{ userFeedback }}</p>
    </form>
</template>

<script setup>
import { ref } from 'vue';

const productName = ref('');
const productPrice = ref(null);
const userFeedback = ref('');
const emit = defineEmits(['submitProduct']);

function send() {
    if(!productName.value || !productPrice.value) {
        userFeedback.value = 'Por favor, preencha todos os dados!';
    } else {
        emit('submitProduct', {
            name: productName.value,
            price: productPrice.value
        });
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