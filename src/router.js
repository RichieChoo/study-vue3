import { createRouter, createWebHashHistory } from "vue-router";
import Home from "./components/Home.vue";
export default createRouter({
	history: createWebHashHistory(),
	routes: [
		{ path: "/", name: "Home", component: Home },
		{
			path: "/setup",
			name: "Setup",
			component: () => import("./components/setup.vue"),
		},
	],
});
