<template>
    <div id="home">
        <div v-if="login" class="login">
            <div id="user-header">
                <img id="user-image" @click="userProfile" :src="UserImage" alt="user image">
                <h3>Home</h3>
                <div></div>
                <button @click="userLogout" id="logout">Log Out</button>
            </div>
            <all-tweets id="tweets"></all-tweets>
            <div id="delete-account">
                <button @click="deleteProfile" id="delete-btn">Delete Account</button>
            </div>
            <div id="tweet-icon">
                <img @click="createTweet" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAXoPQzntYQAVY308mROLyPuRp1smbeMQ30g&usqp=CAU" alt="icon of write tweet">
            </div>
        </div>
        <div v-else class="notlogin">
            <h3>You have not logined in!</h3>
            <router-link to="Login">Login Page</router-link>
        </div>
    </div>
</template>

<script>

import cookies from 'vue-cookies'
import deleteApi from 'axios'
import AllTweets from '../components/AllTweets'

    export default {
        components: {
            AllTweets
        },
        data() {
            return {
                login: true,
                token: cookies.get("loginToken"),
                password: cookies.get("userPassword"),
                status: ""
            }
        },
        
        computed: {
            UserImage() {
                return this.$store.getters.userUrl
            }
        },
        methods: {
            userProfile: function() {
               this.$store.dispatch("getTweets"),
                this.$router.push("Profile"),
                cookies.set("userPicture", this.$store.getters.userUrl),
                this.$store.dispatch("getProfile")
            },
            checkLogin: function() {
                if(this.token != undefined) {
                    this.login = true
                }
            },
            mounted: function() {
                this.checkLogin;
            },
            userLogout: function() {
                cookies.remove("loginToken");
                cookies.remove("userId");
                this.$router.push("Login");
            },
            deleteProfile: function() {
                this.Status = "Loading"
                deleteApi.request({
                   url: "https://tweeterest.ml/api/users",
                   method: "DELETE",
                   headers: {
                    // "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: this.token,
                       password: this.password
                   }
                }).then((response) => {
                    console.log(response);
                    this.status = "Success";
                    this.$router.push("/");
                }).catch((error) => {
                    //show user login failure
                    console.log(error);
                    this.status = "Error";

                }) 
            },
            createTweet: function() {
                this.$router.push("Tweet");
                cookies.set("userPicture", this.$store.getters.userUrl);
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

#home {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
}

.login {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    
    #user-header {
        height: 10vh;
        width: 100%;
        display: grid;
        grid-template-columns: 20% 20% 40% 20%;
        justify-items: center;
        align-items: center;
        border-bottom: 2px solid #1DA1F2;

        #user-image {
            width: 90%;
            height: 90%;
            object-fit: cover;
            border-radius: 50%;
        }

        h3 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 1rem;
        }

        button {
            width: 20vw;
            height: 5vh;
            background-color: #1DA1F2;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            border: none;
            border-radius: 1.5em;
            font-weight: bold;
            margin-right: 2em;
        }
    }

    #tweets {
        min-height: 90vh;
        display: grid;
        justify-items: center;
        align-items: center; 
    }

    #delete-account {
        display: grid;
        justify-items: center;
        align-items: center; 
    }

    #delete-btn {
        width: 30vw;
        height: 5vh;
        color: #1DA1F2;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid #1DA1F2;
        border-radius: 1.5em;
        font-weight: bold;
        margin-right: 2em;
    }

    #tweet-icon {
        height: 10vh;
        width: 100%;
        display: grid;
        align-items: center;
        justify-items: center;

        img {
            position: fixed;
            top: 20vh;
            right: 2vw;
            width: 15%;
            z-index: 10;
        }
    }

}



</style>