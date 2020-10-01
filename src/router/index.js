import Vue from "vue";
import VueRouter from "vue-router";
import SignUpPage from "../views/SignUp.vue"
import LoginPage from "../views/Login.vue"
import HomePage from "../views/Home.vue"
import ProfilePage from "../views/Profile.vue"
import UserIntroPage from "../views/UserIntro.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup-page",
    component: SignUpPage
  },
  {
    path: "/login",
    name: "login-page",
    component: LoginPage
  },
  {
    path: "/home",
    name: "home-page",
    component: HomePage
  },
  {
    path: "/profile",
    name: "profile-page",
    component: ProfilePage
  },
  {
    path: "/userintro",
    name: "userintro-page",
    component: UserIntroPage
  },

];

const router = new VueRouter({
  routes
});

export default router;
