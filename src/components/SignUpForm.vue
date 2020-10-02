<template>
    <div id="signup-form">
        <h3>Email</h3>
        <input type="text" id="email-input" class="input" v-model="email">
        <h3>Username</h3>
        <input type="text" id="username-input" class="input" v-model="username">
        <h3>Password</h3>
        <input type="password" id="password-input" class="input" v-model="password">
        <h3>Bio</h3>
        <textarea id="bio-input" class="input" v-model="bio"></textarea>
        <h3>Birthdate</h3>
        <input type="text" id="birthdate-input" class="input" v-model="birthdate">
        <button class="btn" @click="signupUser">Sign Up</button>
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
                   this.$router.push("/");
               }).catch((error) => {
                   console.log(error)
               })
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

#signup-form {
    min-height: 60vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    h3 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1rem;
    }

    .input {
        width: 80%;
        height: 7vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
    }

    .btn {
        width: 80%;
        height: 7vh;
        border: 1px solid #1DA1F2; 
        border-radius: 1.5em;
        background-color: white;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #1DA1F2;

        :hover {
            background-color: #1DA1F2;
            color: white;
        }
    }
}
</style>