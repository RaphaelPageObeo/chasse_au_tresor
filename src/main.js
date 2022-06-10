import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'

createApp(App)
    .use(VueCookies)
    .mount('#app')
