<template>
    <div id="comment">
        <div id="nav">
            <button @click="goToHome">Home</button>
            <button @click="goToOtherProfile">Other Profile</button>
            <button @click="goToProfile">Profile</button>
        </div>
        <div id="tweet">
            <div id="image">
                <img :src="UserPhoto" id="userPhoto" alt="user image">
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
        <div id="comment-btn">
            <button @click="createComment">Reply</button>
            <button @click="updateComment">Update</button>
        </div>
        <h3>{{ commentStatus }}</h3>
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
                commentStatus: "Comment!"
            }
        },

        methods: {
            goToHome: function() {
                this.$router.push("Home");
            },
            goToOtherProfile: function() {
                this.$router.push("OtherProfile");
            },
            goToProfile: function() {
                this.$router.push("Profile");
            },
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
                   this.commentStatus = "Commented!";
                   this.comment = response.data;
                   console.log(this.comment);
               }).catch((error) => {
                   console.log(error);
                   this.commentStatus = "Failed to comment!";
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
                    this.commentStatus = "Updated!";
                }).catch((error) => {
                    console.log(error);
                    this.commentStatus = "Failed to update!";
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

#nav {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr;

    button {
        width: 25vw;
        height: 5vh;
        background-color: white;
        color: #1DA1F2;
        border: 1px solid #1DA1F2;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border-radius: 1.5em;
        font-weight: bold;
    }
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

#comment-btn {
    min-height: 10vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;

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

h3 { 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        text-align: left;
    }

</style>