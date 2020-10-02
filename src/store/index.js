import Vue from "vue";
import Vuex from "vuex";
import getProfileApi from 'axios'
import cookies from 'vue-cookies'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userImageList: [
      {
        id: 1,
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRbTmrquPZNHANbNvAWEZ-qZjR-ykCap_E_zw&usqp=CAU"
      },
      {
        id: 2,
        url: "https://i.pinimg.com/originals/f3/06/12/f30612a9a226b09db9ab9a1962e40cb5.jpg"
      },
      {
        id: 3,
        url: "https://pm1.narvii.com/7126/1edee18cd414fa6001bffcea53d2e319c85c23efr1-512-512v2_hq.jpg"
      },
      {
        id: 4,
        url: "https://cdn.picrew.me/app/image_maker/137904/icon_cjBQTx0dg2C0kRxW.png"
      },
      {
        id: 5,
        url: "https://i.pinimg.com/originals/95/7d/35/957d35dfb1a5cf409e584c2de72a904c.png"
      },
      {
        id: 6,
        url: "https://i.pinimg.com/564x/8a/1a/a7/8a1aa786b9d6d2b3235f8ae27b778496.jpg"
      },
      {
        id: 7,
        url: "https://i.pinimg.com/originals/8f/50/66/8f50668b334e9926b7815819a1a7bf1a.jpg"
      },
      {
        id: 8,
        url: "https://i.pinimg.com/originals/cf/35/76/cf35760687430b2228bc55ac2b182227.jpg"
      },
      {
        id: 9,
        url: "https://pbs.twimg.com/profile_images/3534221980/03425bd81ded3a2aec9c0c327a945830_400x400.jpeg"
      },
      {
        id: 10,
        url: "https://i.pinimg.com/originals/9d/36/2e/9d362e894eefc975591567762f03e832.jpg"
      },
    ],
    tweets: [],
    id: cookies.get("userId"),
    token: cookies.get("loginToken"),
    status: "",
    user: []

  },
  mutations: {
    viewProfile: function(state, data) {
      state.user = data;
      state.status = "Success";
    }
    // updateTweets: function(state, data) {
    //   state.tweets = data;
    // }
  },
  actions: {
    getProfile: function(state) {
      console.log(cookies.get("userId"));
      getProfileApi.request({
        url: "https://tweeterest.ml/api/users",
        method: "GET",
        headers: {
            "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
        },
        params: {
            userId: cookies.get("userId"),
            loginToken: state.token
        }
    }).then((response) => {
        this.commit("viewProfile", response.data[0])
    }).catch((error) => {
        console.log(error);
        state.status = "Error";
    })
    }

    // getTweets: function(context) {
    //   tweetsApi.request({
    //     headers: {
    //       "Content-Type": "application/json",
    //       "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
    //      },
    //     method: "GET",
    //   }).then((response) => {
    //     context.commit("updateTweets", response.data)
    //     console.log(response.data)
    //   }).catch((error) => {
    //     console.log(error)
    //   })
    // }
  },
  modules: {},
  getters: {
    userUrl: function(state) {
      return state.userImageList[Math.floor(Math.random()*10)].url
    }
  }
});
