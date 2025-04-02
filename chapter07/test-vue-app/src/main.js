import { createApp } from 'vue';
//import App from './App.vue';
//import App from './App2.vue';
//import App from './App3.vue';
import App from './App4.vue';

import CheckboxItem from './components/CheckboxItem.vue';

createApp(App).component('CheckboxItem', CheckboxItem).mount('#app');
