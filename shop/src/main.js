import { createApp } from 'vue';

import App from './components/App.vue'
import ProductInfo from './components/ProductInfo.vue'
import ProductsList from './components/ProductsList.vue'

const routes = [
    { path: '/', component: ProductsList },
    { path: '/product/:id', component: ProductInfo }
]

createApp(App)
.use(VueAxios, axios)
.mount('#app');