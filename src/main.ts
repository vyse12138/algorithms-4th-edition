import { createApp } from 'vue'
import App from './App.vue'
import unionFind from './algorithms/unionFind'
import sort from './algorithms/sort'

createApp(App).mount('#app')

unionFind()
console.log('----------------------------------------------------------------')
sort()
console.log('----------------------------------------------------------------')
