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
import CommentPage from "../views/Comment.vue"
import ViewCommentPage from "../views/ViewComments.vue"
import ViewOtherCommentPage from "../views/OtherComment.vue"


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
    path: "/otherProfile",
    name: "otherprofile-page",
    component: OtherProfilePage
  },
  {
    path: "/follow",
    name: "follow-page",
    component: FollowPage
  },
  {
    path: "/comment",
    name: "comment-page",
    component: CommentPage
  },
  {
    path: "/viewComment",
    name: "viewcomment-page",
    component: ViewCommentPage
  },
  {
    path: "/viewOtherComment",
    name: "viewothercomment-page",
    component: ViewOtherCommentPage
  }

];

const router = new VueRouter({
  routes
});

export default router;
