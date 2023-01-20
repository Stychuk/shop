import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router'; 
import store from './store.js';

import App from './components/App.vue'
import Cart from './components/Cart.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo },
    { path: '/product-cart', component: Cart }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

createApp(App)
.use(store)
.use(router)
.mount('#app');