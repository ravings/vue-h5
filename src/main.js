import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import "amfe-flexible";

import "@/svgIcons/index.js";

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
