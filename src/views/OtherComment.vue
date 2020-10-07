<template>
    <div id="comment">
        <div id="tweet">
            <div id="image">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
            </div>
            <div id="text">
                <div id="container-1">
                    <h3>{{ username }}</h3>
                    <h4>{{ date }}</h4>
                    <div></div>
                </div>
                <p>{{ tweet }}</p>
            </div>
        </div>
        <div id="reply">
            <div id="image-2">
                <img :src="UserPhoto" id="userPhoto" alt="user image">
            </div>
            <div id="text-2">
                <textarea id="comment-area" v-model="content"></textarea>
            </div>
        </div>
        <div>
            <button @click="createComment">Reply</button>
            <button @click="updateComment">Update</button>
        </div>
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
                comment: {},
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
                   this.$router.push("OtherProfile")
               }).catch((error) => {
                   console.log(error)
               })
            },
            updateComment: function() {
                axios.request({
                    url: "https://tweeterest.ml/api/comments",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                    },
                    data: {
                        loginToken: this.token,
                        commentId: cookies.get("userCommentId"),
                        content: this.content
                    }
                }).then((response) => {
                    console.log(response);
                    this.loginStatus = "Success";
                    this.$router.push("OtherProfile")
                }).catch((error) => {
                    console.log(error);
                    this.loginStatus = "Error";
                })
            },
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

#comment {
    min-height: 50vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}

#tweet {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 30% 70%;

    #image {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
    }

    #text {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        #container-1 {
            width: 100%;
            height: 100%;
            display: grid;
            justify-items: center;
            align-items: center;
            grid-template-columns: 20% 60% 20%;

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

        p { 
            width: 100%;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
        }
    }
}

#reply {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 30% 70%;

    #image-2 {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
        }
    }

    #text-2 {
        width: 90%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: left;

        #comment-area {
            width: 100%;
            height: 100%;
        }
    }
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
</style>