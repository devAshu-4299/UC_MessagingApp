import { createRouter, createWebHistory } from "vue-router";
import Login from "./components/login.vue";
import Chats from "./components/chats.vue";
const routes = [
  {
    path: "/",
    component: Login,
    name: "login",
  },
  {
    path: "/chats",
    component: Chats,
    name: "chats",
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
