import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router'
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import ScrollFixedHeader from 'vuejs-scroll-fixed-header'
import VueScrollTo from 'vue-scrollto'

Vue.use(VueScrollTo)

// You can also pass in the default options
Vue.use(VueScrollTo, {
    container: "body",
    duration: 500,
    easing: "ease",
    offset: 0,
    force: true,
    cancelable: true,
    onStart: false,
    onDone: false,
    onCancel: false,
    x: false,
    y: true
})

Vue.use(ElementUI);
Vue.use(ScrollFixedHeader)
Vue.config.productionTip = false

new Vue({
    router,
    store,
  render: h => h(App),
}).$mount('#app')
