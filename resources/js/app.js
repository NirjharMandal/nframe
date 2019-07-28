require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import {routes} from './admin-routes';


/**
 * The following block of code may be used to automatically register your
 * Vue admin-components. It will recursively scan this directory for the Vue
 * admin-components and automatically register them with their "basename".
 *
 * Eg. ./admin-components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i);
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default));

Vue.component('ecomponent', require('./admin-components/ExampleComponent.vue').default);
Vue.component('breadcamp', require('./admin-components/breadcamp.vue').default);
Vue.component('admin-routes', require('./admin-components/adminRoutes.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding admin-components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const router = new VueRouter({
    routes,
    mode: 'history'
})
const app = new Vue({
    el: '#app',
    router
});
