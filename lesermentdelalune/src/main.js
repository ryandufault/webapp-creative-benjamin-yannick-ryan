import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia'
import router from './router';  // ← Import du router

const app = createApp(App);

app.use(createPinia())
app.use(router);  // ← Installation du router
app.mount('#app');