import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import FlashCard from './components/FlashCard.vue'


const app = createApp(App)
app.component('flash-card', FlashCard)
app.mount('#app')
