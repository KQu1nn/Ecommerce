<template>
    <div class="w-full h-full flex flex-col items-center justify-center">
        <h2 class="text-2xl pb-9">Adicionar produto</h2>
        <form class="w-2/5 flex flex-col items-center gap-2" @submit.prevent="send">
            <input class="w-72 h-9 px-3 outline-0 text-sm border-1 border-gray-200"
            v-model="productName" type="text" placeholder="Nome do produto..">

            <input class="w-72 h-9 px-3 outline-0 text-sm border-1 border-gray-200"
            v-model="productPrice" type="number" placeholder="Preço..">

            <input ref="fileInput" type="file" accept="image/*" @change="onFileChange" class="hidden"/>
            <button type="button" @click="chooseImage" class="flex items-center gap-1 text-blue-600 text-sm hover:underline cursor-pointer">
                <font-awesome-icon icon="image" />
                Adicionar Imagem
            </button>

            <button class="border-1 p-2 bg-blue-400 text-sm font-semibold text-white cursor-pointer">Cadastrar Produto</button>
            <p v-if="userFeedback" :class="['text-sm mt-2', userFeedbackType === 'success' ? 'text-green-500' : 'text-red-500']">{{ userFeedback }}</p>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const productName = ref('');
const productPrice = ref(null);
const productImage = ref(null);
const fileInput = ref(null);
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
            isInCart: isInCart.value,
            image: productImage.value
        });

        userFeedback.value = 'Produto adicionado com sucesso!';
        userFeedbackType.value = 'success';
    }
    resetFields();
    resetUserFeedback();
}
function onFileChange(event) {
    const file = event.target.files[0];
    if (!file) return;

    productImage.value = {
        name: file.name,
        url: URL.createObjectURL(file),
    };
}

function chooseImage() {
    fileInput.value?.click()
}

function resetFields() {
    productName.value = '';
    productPrice.value = '';
    productImage.value = null;
}
function resetUserFeedback() {
    setTimeout(() => {
        userFeedback.value = '';
    }, 3000)
}
</script>