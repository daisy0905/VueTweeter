<template>
    <div id="comments">
        <div id="container-1">
            <h3>{{ comment.username }}</h3>
            <h4>{{ comment.createdAt }}</h4>
            <div></div>
        </div>
        <div id="container-2">
            <p>{{ comment.content }}</p>
        </div>
        <div id="container-4">
            <button class="comment-btn" @click="goToComment">Update Comment</button>
            <button class="comment-btn" @click="deleteComment">Delete Comment</button>
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
                this.Status = "Loading"
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
                    this.status = "Success";
                    this.$router.push("Profile");
                }).catch((error) => {
                    console.log(error);
                    this.status = "Error";

                }) 
            },
        }
        
    }
</script>

<style lang="scss" scoped>

</style>