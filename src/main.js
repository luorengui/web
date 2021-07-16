import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import router from './router'


Vue.config.productionTip = false

router.beforeEach(async (to, from, next) => {
  console.log(to.fullPath)
  console.log(from.fullPath)
  next()
})


new Vue({
  render: h => h(App),
  router,
  vuetify,

}).$mount('#app')
