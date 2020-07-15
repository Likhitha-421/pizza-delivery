import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'

Vue.use(ElementUI);
Vue.use(ScrollFixedHeader)
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
