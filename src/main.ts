import { createApp } from 'vue'
import * as VueRouter from "vue-router";
import { createPinia } from 'pinia'

import routes from "./configs/routes";
import App from './App.vue'

import './assets/main.css'

// 路由
const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});

const app = createApp(App)

app.use(router)
app.use(createPinia())

app.mount('#app')
