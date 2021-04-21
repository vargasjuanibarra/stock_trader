import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

// export default axios.create({
//     baseURL: 'https://stock-trader-80090-default-rtdb.firebaseio.com/'
// }) 



const app = createApp(App).use(store).use(router).mount('#app')

