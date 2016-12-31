import Vue from 'vue';
import App from './App.vue';
import Message from './Message.vue';
import VueRouter from 'vue-router';
import Users from './Users.vue';
import Home from './Home.vue';

Vue.component('app-message', Message);
Vue.use(VueRouter);

import 'font-awesome/css/font-awesome.css';

const routes = [
	{ path: '/users/:teamId', component:Users },
	{ path: '/', component: Home }
];

const router = new VueRouter({
	routes,
	mode: 'history'
});

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
