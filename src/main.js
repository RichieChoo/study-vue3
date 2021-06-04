import * as vue from "vue";
import App from "./App.vue";
import router from "./router";

const app = vue.createApp(App).use(router);

if (process.env.NODE_ENV === "development") {
	// if ("__VUE_DEVTOOLS_GLOBAL_HOOK__" in window) {
	// 	window.__VUE_DEVTOOLS_GLOBAL_HOOK__.Vue = app;
	// }
	app.config.devtools = true;
}
app.mount("#app");
