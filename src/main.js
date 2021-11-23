import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import vuetify from './plugins/vuetify'
// import VModal from 'vue-js-modal'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "./index.css"

// createApp(App).mount("#app");

Vue.use(BootstrapVue)
Vue.config.productionTip = false
// Vue.use(VModal, { dynamic: true })

new Vue({
  store,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
