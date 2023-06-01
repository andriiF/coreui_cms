import ('./bootstrap')

import {createApp} from 'vue/dist/vue.esm-bundler.js';
import router from './router'
import App from "./App.vue";
import "../../css/Home/app.css";
import { ZiggyVue } from '/vendor/tightenco/ziggy/dist/vue.es';
import { Ziggy } from '../ziggy';


const app = createApp(App);
app.use(router);
app.use(ZiggyVue,Ziggy)
app.mount("#app");
