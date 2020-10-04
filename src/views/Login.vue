<template>
    <div id="login">
        <div id="header">
            <img src="https://mobiledevmemo.com/wp-content/uploads/2014/05/Twitter-Bird.png" alt="twitter logo">
            <h1>Log in to Tweeter</h1>
        </div>
        <div id="login-area">
            <h3>Email</h3>
            <input type="text" id="email-input" class="input" v-model="email">
            <h3>Password</h3>
            <input type="text" id="password-input" class="input" v-model="password">
            <button class="btn" @click="loginUser">Log in</button>
            <h3>{{ loginStatus }}</h3>
            <h4 @click="signUp">Sign up for Tweeter</h4>
        </div>
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
                        // cookies.set("userEmail", response.data.email);
                        // cookies.set("userName", response.data.username);
                        // cookies.set("userBio", response.data.bio);
                        // cookies.set("userBirthdate", response.data.birthdate);
                        cookies.set("userPassword", this.password);
                        //send user to "home page"
                        this.$store.dispatch("getAllTweets");
                        this.$router.push("Home");
                    }
                }).catch((error) => {
                    //show user login failure
                    console.log(error);
                    this.loginStatus = "Error";

                }) 
            },
            signUp: function() {
                this.$router.push("SignUp");
            }
        }
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#login {
    min-height: 60vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}

#header {
    min-height: 15vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    margin: 2em 0 2em 0;

    img {
        display: block;
        width: 15vw;
        margin-bottom: 2em;
    }

    h1 {
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        font-size: 1.5rem;
    }
}

#login-area {
    min-height: 40vh;
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
        height: 8vh;
        background-color: #E1E8ED;
        border: 1px solid #AAB8C2;
        margin: 0 0 1em 0;
        border-bottom: 1px solid #1DA1F2;
        text-align: center;
    }

    .btn {
        width: 80%;
        height: 7vh;
        background-color: #1DA1F2;
        border-radius: 1.5em; 
        border: none;
        font-size: 1rem;
        font-family: Arial, Helvetica, sans-serif;
        color: white;
        font-weight: bold;
    }

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        color: #1DA1F2;
    }
    
}

</style>