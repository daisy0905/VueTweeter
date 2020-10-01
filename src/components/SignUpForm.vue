<template>
    <div>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>Username</p>
        <input type="text" id="username-input" v-model="username">
        <p>Password</p>
        <input type="password" id="password-input" v-model="password">
        <p>Bio</p>
        <textarea id="bio-input" v-model="bio"></textarea>
        <p>Birthdate</p>
        <input type="text" id="birthdate-input" v-model="birthdate">
        <h2 @click="signupUser">Sign Up</h2>
    </div>
</template>

<script>
import axios from 'axios'
import cookies from 'vue-cookies'

    export default {
       name: "signup-form",
       data() {
           return {
               email: "",
               username: "",
               password: "",
               bio: "",
               birthdate: ""
           }
       },
       methods: {
           signupUser: function() {
               axios.request({
                   url: "https://tweeterest.ml/api/users",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       email: this.email,
                       password: this.password,
                       username: this.username,
                       bio: this.bio,
                       birthdate: this.birthdate
                   }
               }).then((response) => {
                   console.log(response);
                   //write logic to ensure token was sent
                   cookies.set("loginToken", response.data.loginToken);
                   // send to home page
               }).catch((error) => {
                   console.log(error)
               })
           }
       },
    }
</script>

<style lang="scss" scoped>

</style>