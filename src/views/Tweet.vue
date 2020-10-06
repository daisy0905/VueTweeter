<template>
    <div id="tweet">
        <div id="container-1">
            <img @click="backToHome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
            <h3>Create Tweet</h3>
            <div></div>
            <button @click="createTweet">Tweet</button>
        </div>
        <div id="container-2">
            <img :src="UserPhoto" id="userPhoto" alt="user image"> 
            <textarea id="tweet-text" v-model="content"></textarea>
            <button @click="updateTweet">Update Tweet</button>
        </div>
        <div id="space"></div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'

    export default {
        data() {
            return {
                UserPhoto: cookies.get("userPicture"),
                token: cookies.get("loginToken"),
                content: "",
                tweet: {}
            }
        },
        methods: {
            backToHome: function() {
                this.$router.push("Home");
            },
            createTweet: function() {
               axios.request({
                   url: "https://tweeterest.ml/api/tweets",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: this.token,
                       content: this.content
                   }
               }).then((response) => {
                   console.log(response);
                   this.tweet = response.data;
                   console.log(this.tweet);
                   cookies.set("idUser", response.data.userId)
               }).catch((error) => {
                   console.log(error)
               })
           },
           updateTweet: function() {
                axios.request({
                    url: "https://tweeterest.ml/api/tweets",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                    },
                    data: {
                        loginToken: this.token,
                        tweetId: cookies.get("userTweetId"),
                        content: this.content
                    }
                }).then((response) => {
                    console.log(response);
                    this.loginStatus = "Success";
                    this.$store.commit("modifyTweet", cookies.get("userTweetId"), this.content),
                    this.$router.push("Profile")
                }).catch((error) => {
                    console.log(error);
                    this.loginStatus = "Error";
                })
            },
        }
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#tweet {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}

#container-1 {
    min-height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 10% 30% 30% 30%;

    img {
        width: 5vw;
    }

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        text-align: left;
    }

    button {
        width: 25vw;
        height: 5vh;
        background-color: #1DA1F2;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: none;
        border-radius: 1.5em;
        font-weight: bold;
    }
}

#container-2 {
    min-height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    #userPhoto {
            width: 80px;
            height: 80px;
            object-fit: cover;
            border-radius: 50%;
        }

    #tweet-text {
        width: 80%;
        height: 40vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
        text-align: center;
    }

    button {
        width: 30vw;
        height: 5vh;
        background-color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid #1DA1F2;
        border-radius: 1.5em;
        font-weight: bold;
    }
}

#space {
    min-height: 30vh;
}
</style>