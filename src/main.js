import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
/* import * as firebase from 'firebase/app'; */

// Your web app's Firebase configuration
/* const config = {
    apiKey: process.env["API_KEY"],
    authDomain: process.env["AUTH_DOMAIN"],
    projectId: process.env["PROJECT_ID"],
    storageBucket: process.env["STORAGE_BUCKET"],
    messagingSenderId: process.env["MESSAGING_SENDER_ID"],
    appId: process.env["APP_ID"],
}; */

createApp(App)
        .use(store)
        .use(router)
        .mount('#app')