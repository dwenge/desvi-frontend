import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import layouts from './layouts'

import '@/style.css'

const app = createApp(App)

layouts.forEach(layout => {
    app.component(layout.name, layout)
})

app.use(router)

app.mount('#app')
