<template>
    <div id="comments">
        <div id="container-1">
            <h3>{{ comment.username }}</h3>
            <h4>{{ comment.createdAt }}</h4>
        </div>
        <div id="container-2">
            <p>{{ comment.content }}</p>
            <div class="unit">
                <span id="like-active">{{ commentLikeNum }}</span>
                <img src="../assets/tweeter-like-icon.png" alt="comment like icon" v-if="ifLike" @click="unlike">
                <img src="../assets/tweeter-unlike-icon.png" alt="comment unlike icon" v-else @click="like">
            </div>
        </div>
        <div id="container-3">
            <button v-if="comment.username == logUser" class="comment-btn" @click="goToComment">Update Comment</button>
            <button v-if="comment.username == logUser" class="comment-btn" @click="deleteComment">Delete Comment</button>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'

    export default {
        name: "comment",
        props: {
            comment: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                token: cookies.get("loginToken"),
                ifLike: false,
                commentLikeNum: ""
            }
        },
        methods: {
            goToComment: function() {
                cookies.set("userCommentId", this.comment.commentId);
                cookies.set("userContent", this.comment.content)
                this.$router.push("Comment")
            },
            deleteComment: function() {
                axios.request({
                   url: "https://tweeterest.ml/api/comments",
                   method: "DELETE",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: cookies.get("loginToken"),
                       commentId: this.comment.commentId
                   }
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error);
                    this.status = "Error";

                }) 
            },
            getCommentLike: function() {
                axios.request({
                url: "https://tweeterest.ml/api/comment-likes",
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                },
                params: {
                    commentId: this.comment.commentId
                }
                }).then((response) => {
                    console.log(response.data);
                    this.commentLikeNum = response.data.length;
                    for(let i=0; i<response.data.length; i++) {
                    if(response.data[i].username == cookies.get("userName")) {
                    this.ifLike = true;
                    return
                    }
                    this.ifLike = false;
                }
                }).catch((error) => {
                console.log(error)
                })
            },
            like: function() {
               axios.request({
                   url: "https://tweeterest.ml/api/comment-likes",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: this.token,
                       commentId: this.comment.commentId
                   }
               }).then((response) => {
                   console.log(response.data);
                   this.ifLike = true;
                   this.commentLikeNum++;
               }).catch((error) => {
                   console.log(error)
               })
            },
            unlike: function() {
                axios.request({
                   url: "https://tweeterest.ml/api/comment-likes",
                   method: "DELETE",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: this.token,
                       commentId: this.comment.commentId
                   }
                }).then((response) => {
                    console.log(response);
                    this.ifLike = false;
                    this.commentLikeNum--;
                }).catch((error) => {
                   console.log(error)
                })
            }  
        },
        mounted () {
            this.getCommentLike();
        },
        computed: {
            logUser() {
                return cookies.get('userName') 
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

#comments {
    height: 20vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
    background-color: #1DA1F2;
    z-index: 30;
    padding-bottom: 1em;
    box-shadow: 3px 3px 2px #AAB8C2;
}

#container-1 {
    width: 90%;
    height: 5vh;
    grid-template-columns: 40% 60%;
    display: grid;
    justify-items: center;
    align-items: center; 
    border-bottom: 1px solid white;

    h3 {
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
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 80% 20%; 
    margin: 0.5em 0.5em 0 0;
    
    p {
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    text-align: center;
    }

    .unit {
        width: 100%;
        height: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 1fr;

        #like-active {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
        }
        
        img {
            width: 20px;
        }
    }

}

#container-3 {
    width: 100%;
    min-height: 5vh;
    display: grid;
    justify-items: center;
    align-items: center; 
    margin-top: 0.5em;
    grid-template-columns: 1fr 1fr;

    button {
        width: 30vw;
        height: 5vh;
        border: 1px solid white;
        border-radius: 1em;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        background-color: #1DA1F2;
    }
}   
</style>