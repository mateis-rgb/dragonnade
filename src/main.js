import { createApp } from 'vue';
import { createVuetify } from 'vuetify';

import App from './App.vue';
import router from './router';

import './assets/main.css';
import '@mdi/font/css/materialdesignicons.css'
import "vuetify/styles";

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";


document.querySelector("title").innerText = "Dragonnade";


const vuetify = createVuetify({
    icons: {
        defaultSet: 'mdi', // This is already the default value - only for display purposes
    },
    components,
    directives
});

const app = createApp(App);

app.use(router);
app.use(vuetify);
app.mount('#app');
