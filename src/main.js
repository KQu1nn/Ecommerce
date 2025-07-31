import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// Importações do Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHeart, faShoppingCart, faTimes } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'

// Adiciona o ícone heart à biblioteca
library.add(faHeart, faHeartSolid, faHeartRegular, faShoppingCart, faTimes)


const app = createApp(App)

// Registra o componente globalmente
app.component('font-awesome-icon', FontAwesomeIcon)

app.mount('#app')
