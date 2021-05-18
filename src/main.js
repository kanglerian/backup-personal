import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import AOS from "aos";
import "aos/dist/aos.css";
import { gsap } from "gsap";
import { CSSPlugin } from "gsap/CSSPlugin";
import LoadScript from "vue-plugin-load-script";

gsap.registerPlugin(CSSPlugin);

AOS.init({
  duration: 800,
});

Vue.config.productionTip = false;
Vue.use(LoadScript);
Vue.loadScript("https://apis.google.com/js/platform.js");

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
