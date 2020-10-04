<template>
    <div id="tweet-unit">
        <div id="container-1">
            <h3 @click="goToOtherUser">{{ tweet.username }}</h3>
            <h4>{{ tweet.created_at }}</h4>
            <div></div>
        </div>
        <div id="container-2">
            <p>{{ tweet.content }}</p>
        </div>
        <div id="container-3">
            <button class="tweet-btn" @click="goToTweet">Update Tweet</button>
            <button class="tweet-btn" @click="deleteTweet">Delete Tweet</button>
        </div>
        
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import deleteTweetApi from 'axios'

    export default {
        name: "a-tweet",
        props: {
            tweet: {
                type: Object,
                required: true
            }
        },
        methods: {
           goToTweet: function() {
               cookies.set("userTweetId", this.tweet.tweetId);
               this.$router.push("Tweet")
           },
           deleteTweet: function() {
                this.Status = "Loading"
                deleteTweetApi.request({
                   url: "https://tweeterest.ml/api/tweets",
                   method: "DELETE",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       tweetId: this.tweet.tweetId,
                       loginToken: cookies.get("loginToken")
                   }
                }).then((response) => {
                    console.log(response);
                    this.status = "Success";
                }).catch((error) => {
                    console.log(error);
                    this.status = "Error";

                }) 
            },
            goToOtherUser: function() {
                cookies.set("otherUserId", this.tweet.userId),
                this.$router.push("OtherProfile")
            }
        },
    }
       
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// #tweet-unit {
//     min-height: 30vh;
//     width: 100%;
//     display: grid;
//     justify-items: center;
//     align-items: center; 
//     row-gap: 2vh;
// }

#container-1 {
    width: 100%;
    height: 5vh;
    grid-template-columns: 30% 50% 20%;
    display: grid;
    justify-items: center;
    align-items: center; 
    background-color: #AAB8C2;
    opacity: 0.7;
    margin-top: 1em;

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem; 
    }
}

#container-2 {
    width: 100%;
    height: 10vh;
    display: grid;
    justify-items: center;
    align-items: center; 
    background-color: #E1E8ED;

    p {
    height: 10vh;
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin-top: 1em;
    }
}

#container-3 {
    width: 100%;
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: center; 
    grid-template-columns: 50% 50%;
    column-gap: 1vw;

    .tweet-btn {
        width: 25vw;
        height: 5vh;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: none;
        border-bottom: 2px solid #1DA1F2;
        background-color: white;
}
}

</style>