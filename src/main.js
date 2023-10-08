import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router"
import './validators'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

createApp(App)
    .use(store)
    .use(router)
    .use(Toast)
    .mount('#app')
