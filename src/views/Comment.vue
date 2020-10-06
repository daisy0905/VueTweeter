<template>
    <div id="comment">
        <div id="tweet">
            <div id="image">
                <img src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="user image">
            </div>
            <div id="text">
                <div id="container-1">
                    <h3>{{ username }}</h3>
                    <h4>{{ date }}</h4>
                    <div></div>
                </div>
                <div id="container-2">
                    <p>{{ tweet }}</p>
                </div>
            </div>
        </div>
        <div id="reply">
            <div>
                <img :src="UserPhoto" id="userPhoto" alt="user image">
            </div>
            <div>
                <textarea id="comment-area" v-model="content"></textarea>
            </div>
        </div>
        <button @click="createComment">Reply</button>
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
                username: cookies.get("tweetUsername"),
                userTweetId: cookies.get("tweetTweetId"),
                tweet: cookies.get("tweetContent"),
                date: cookies.get("tweetTime"),
                content: "",
                comment: {}
            }
        },

        methods: {
            createComment: function() {
               axios.request({
                   url: "https://tweeterest.ml/api/comments",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: this.token,
                       content: this.content,
                       tweetId: this.userTweetId
                   }
               }).then((response) => {
                   console.log(response);
                   this.comment = response.data;
                   console.log(this.comment);
               }).catch((error) => {
                   console.log(error)
               })
           }
        },
       
    }
</script>

<style lang="sass" scoped>

</style>