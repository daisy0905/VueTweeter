<template>
    <div>
        <div id="header-container1">
            <img @click="backToProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
            <h3>Edit Profile</h3>
            <button @click="updateProfile">Save</button>
            <spacer></spacer>
        </div>
        <div id="header-container2">
            <img src="" alt="cover image">
        </div>
        <div id="user-image">
            <img :src="UserPhoto" alt="user image">       
        </div>
        <div id="user-profile">
            <p>Email</p>
            <input type="text" id="email-input" v-model="email">
            <p>Password</p>
            <input type="text" id="password-input" v-model="password">
            <p>Username</p>
            <input type="text" id="username-input" v-model="username">
            <p>Bio</p>
            <input type="text" id="bio-input" v-model="bio">
            <p>Birthdate</p>
            <input type="text" id="birthdate-input" v-model="birthdate">
        </div>
        <h3>{{ loginStatus }}</h3>
    </div>
</template>

<script>
import profileApi from 'axios'
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
                email: cookies.get("userEmail"),
                password: cookies.get("userPassword"),
                username: cookies.get("userName"),
                bio: cookies.get("userBio"),
                birthdate: cookies.get("userBirthdate"),
                token: cookies.get("loginToken"),
                loginStatus: "",
                UserPhoto: cookies.get("userPicture")
            }
        },
        methods: {
            updateProfile: function() {
                profileApi.request({
                    url: "https://tweeterest.ml/api/users",
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                        "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                    },
                    data: {
                        username: this.username,
                        bio: this.bio,
                        birthdate: this.birthdate,
                        loginToken: this.token
                    }
                }).then((response) => {
                    console.log(response);
                    this.loginStatus = "Success";
                }).catch((error) => {
                    console.log(error);
                    this.loginStatus = "Error";
                })
            },
            backToProfile: function() {
                this.$router.push("Profile");
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>