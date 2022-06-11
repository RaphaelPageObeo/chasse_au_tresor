import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import 'bootstrap-icons/font/bootstrap-icons.css'
import { createApp } from 'vue'
import VueCookies from 'vue-cookies'
import App from './App.vue'

createApp(App)
    .use(VueCookies)
    .mount('#app')
