import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from "@/router"
import './validators'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import 'maz-ui/css/main.css'

const app = createApp(App)

app
    .use(store)
    .use(router)
    .use(Toast)
    .mount('#app')

app.config.globalProperties.window = window
