import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import Galert from "./global/alert";

const app = createApp(App);
app.mount("#app");
app.use(Galert);
