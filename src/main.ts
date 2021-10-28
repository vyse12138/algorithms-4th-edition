import { createApp } from 'vue'
import App from './App.vue'
import unionFind from './algorithms/unionFind'
import sort from './algorithms/sort'
import linkedList from './algorithms/linkedList'
import search from './algorithms/search'
import graph from './algorithms/graph'

createApp(App).mount('#app')

// linkedList()

unionFind()
console.log('----------------------------------------------------------------')
sort()
console.log('----------------------------------------------------------------')
search()
console.log('----------------------------------------------------------------')
graph()
