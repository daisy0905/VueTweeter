<template>
    <div>
        <p>Email</p>
        <input type="text" id="email-input" v-model="email">
        <p>Password</p>
        <input type="text" id="password-input" v-model="password">
        <h2 @click="loginUser">Login</h2>
        <h3>{{ loginStatus }}</h3>
    </div>
</template>

<script>
import loginApi from 'axios'
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
                email: "",
                password: "",
                loginStatus: "",
                token: cookies.get("loginToken")
            }
        },
        methods: {
            loginUser: function() {
                this.loginStatus = "Loading"
                loginApi.request({
                   url: "https://tweeterest.ml/api/login",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       email: this.email,
                       password: this.password
                   }
                }).then((response) => {
                    //check if login token sent
                    if(this.token == undefined) {
                        console.log(response);
                        this.loginStatus = "Success";
                        cookies.set("loginToken", response.data.loginToken);
                        cookies.set("userId", response.data.userId);
                        cookies.set("userEmail", response.data.email);
                        cookies.set("userName", response.data.username);
                        cookies.set("userBio", response.data.bio);
                        cookies.set("userBirthdate", response.data.birthdate);
                        cookies.set("userPassword", this.password)
                        //send user to "home page"
                        this.$router.push("Home");
                    }
                }).catch((error) => {
                    //show user login failure
                    console.log(error);
                    this.loginStatus = "Error";

                }) 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>