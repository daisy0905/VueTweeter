<template>
    <div>
        <div id="header-container1">
            <img @click="backToProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
            <h3>Edit Profile</h3>
            <button @click="updateProfile">Save</button>

        </div>
        <div id="header-container2">
            <img src="" alt="cover image">
        </div>
        <div id="user-image">
            <img :src="UserPhoto" alt="user image">       
        </div>
        <div id="user-profile">
            <p>Email</p>
            <input :placeholder="email" type="text" id="email-input" v-model="emailInput">
            <p>Username</p>
            <input :placeholder="username" type="text" id="username-input" v-model="usernameInput">
            <p>Bio</p>
            <input :placeholder="bio" type="text" id="bio-input" v-model="bioInput">
            <p>Birthdate</p>
            <input :placeholder="birthdate" type="text" id="birthdate-input" v-model="birthdateInput">
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
                emailInput: this.email,
                usernameInput: this.username,
                bioInput: this.bio,
                birthdateInput: this.birthdate,
                token: cookies.get("loginToken"),
                loginStatus: "",
                UserPhoto: cookies.get("userPicture")
            }
        },

        computed: {
            email: function() {
                return this.$store.state.user.email
            },
            username: function() {
                return this.$store.state.user.username
            },
            bio: function() {
                return this.$store.state.user.bio
            },
            birthdate: function() {
                return this.$store.state.user.birthdate
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
                        email: this.emailInput,
                        username: this.usernameInput,
                        bio: this.bioInput,
                        birthdate: this.birthdateInput,
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