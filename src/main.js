import { createApp, resolveComponent } from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from '@/router'
import DefaultLayout from '@/layouts/DefaultLayout.vue'

const app = createApp(App)

app.component('default-layout', DefaultLayout)

app.use(router)

app.mount('#app')
