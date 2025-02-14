import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { initializeApp } from "firebase/app";
import router from './router';


import App from './App.vue'

const firebaseConfig = {
    apiKey: "AIzaSyBTnyvQNMlASAFOgPH50ycffbU30ZpYWjs",
    authDomain: "dashboard-auth-7a68a.firebaseapp.com",
    projectId: "dashboard-auth-7a68a",
    storageBucket: "dashboard-auth-7a68a.firebasestorage.app",
    messagingSenderId: "984376145890",
    appId: "1:984376145890:web:774be409269114e31aebbb"
  };

initializeApp(firebaseConfig);

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


