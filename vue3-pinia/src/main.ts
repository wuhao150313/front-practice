import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import { createPinia } from 'pinia'

const pinia = createPinia();

import piniaPluginPersistedState from 'pinia-plugin-persistedstate';

pinia.use(piniaPluginPersistedState);

import router from './router'



createApp(App).use(pinia).use(router).mount('#app')
