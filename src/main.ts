import { createApp } from "vue";

import AOS from "aos";
import "aos/dist/aos.css";

import "./assets/style.css";

import App from "./App.vue";
import router from "./router/index";

const app = createApp(App);

AOS.init({
  easing: "ease-out-back",
  duration: 1000,
  offset: 50,
});

app.use(router);
app.mount("#app");
