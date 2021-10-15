import Vue from 'vue'
import App from './App.vue'

//create and manager store
import Vuex from 'vuex'
Vue.use(Vuex)
import storeConfigs from './store'
const store = new Vuex.Store(storeConfigs);

//vue router
import VueRouter from 'vue-router'
Vue.use(VueRouter);
import routes from './routes'
const router = new VueRouter({
    routes
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store, //add store in Vue
  router //add router in route
}).$mount('#app')
