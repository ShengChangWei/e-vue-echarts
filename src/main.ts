import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import EVueEcharts from './../packages/index.js';

Vue.use(EVueEcharts);
Vue.config.productionTip = false;


new Vue({
    render: (h) => h(App),
}).$mount('#app');
