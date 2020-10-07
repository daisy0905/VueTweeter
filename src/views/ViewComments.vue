<template>
    <div id="view-comment">
         <div id="container-1">
            <img @click="backToHome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
            <h3>{{ name }}</h3>
            <div></div>
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
        <div>
            <h3>Comment List</h3>
            <all-comments></all-comments>
        </div>
    </div>
</template>

<script>
import AllComments from "../components/AllComments.vue"
import cookies from 'vue-cookies'

    export default {
        components: {
            AllComments
        },
        data() {
            return {
                UserPhoto: cookies.get("userPicture"),
                username: cookies.get("tweetUsername"),
                date: cookies.get("tweetTime"),
                tweet: cookies.get("tweetContent"),
            }
        },
        methods: {
            backToHome: function() {
                this.$router.push("Profile");
            }
        },
        computed: {
            name: function() {
                return this.$store.state.user.username
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>