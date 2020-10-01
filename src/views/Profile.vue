<template>
    <div>
        <div id="user-header">
            <div id="header-container1">
                <img @click="backToHome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
                <h3>{{ name }}</h3>
            </div>
            <div id="header-container2">
                <img src="" alt="cover image">
            </div>
            <div id="header-container3">
                <div id="user-image">
                    <img :src="UserPhoto" alt="user image">
                    <h3>{{name}}</h3>
                </div>
                <div id="profile-btn">
                    <button @click="viewProfile">Edit Profile</button>
                </div>
            </div>  
        </div>
        

    </div>
</template>

<script>
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
                UserPhoto: cookies.get("userPicture"),
                name: cookies.get("userName")
            }
        },
        methods: {
            viewProfile: function() {
                this.$router.push("UserIntro")
            },
            backToHome: function() {
                this.$router.push("Home")
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>