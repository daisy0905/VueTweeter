<template>
    <div id="comments">
        <div id="container-1">
            <h3>{{ comment.username }}</h3>
            <h4>{{ comment.createdAt }}</h4>
        </div>
        <div id="container-2">
            <p>{{ comment.content }}</p>
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
    margin-top: 0.5em;
    

    p {
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    text-align: center;
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