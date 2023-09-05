import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'

const app = createApp<App>(App)
app.config.ignoredElements = [/^ion-/]
app.mount('#app')
