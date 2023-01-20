import { createStore } from 'vuex'

const store = createStore({
    state: {
       cart: [],
     },
     mutations: {
         setCart: (state, tovar) => state.cart.push(tovar),
     },
     getters: {
         getCart: (state) =>
         {
             return state.cart
         }
     }  
 })
export default store;