import Vue from "vue";
import App from "./App.vue";
import router from "./router/index.js";
import VueSmoothScroll from 'vue2-smooth-scroll';
import { BNavbar } from 'bootstrap-vue';
import { NavbarPlugin } from 'bootstrap-vue';
import AOS from 'aos';
import jQuery from "jquery";
import 'aos/dist/aos.css';

AOS.init({});
Vue.use(jQuery);
Vue.use(NavbarPlugin)
Vue.component('b-navbar', BNavbar)
Vue.config.productionTip = false;
Vue.use(VueSmoothScroll);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
