// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import vueResource from 'vue-resource'
import vueCookie from 'vue-cookie'
import vueMaterial from 'vue-material'

Vue.use(vueResource);
Vue.use(vueCookie);
Vue.use(vueMaterial);

/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: { 
    App
   }
}).$mount('#app')
