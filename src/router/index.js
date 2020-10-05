import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "../views/Landing.vue"
import SignUpPage from "../views/SignUp.vue"
import LoginPage from "../views/Login.vue"
import HomePage from "../views/Home.vue"
import ProfilePage from "../views/Profile.vue"
import UserIntroPage from "../views/UserIntro.vue"
import TweetPage from "../views/Tweet.vue"
import OtherProfilePage from "../views/OtherProfile.vue"
import FollowPage from "../views/Follow.vue"


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "lading-page",
    component: LandingPage
  },
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
  {
    path: "/tweet",
    name: "tweet-page",
    component: TweetPage
  },
  {
    path: "/OtherProfile",
    name: "otherprofile-page",
    component: OtherProfilePage
  },
  {
    path: "/Follow",
    name: "follow-page",
    component: FollowPage
  }

];

const router = new VueRouter({
  routes
});

export default router;
