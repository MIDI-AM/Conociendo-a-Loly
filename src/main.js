import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import firebase from "firebase";

Vue.config.productionTip = false;

import { firestorePlugin } from "vuefire";
Vue.use(firestorePlugin);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
