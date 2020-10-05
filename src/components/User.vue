<template>
    <div id="user">
        <div id="container-1">
            <img @click="viewOtherUser" src="https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png" alt="user image">
        </div>
        <div id="container-2">
            <h3>{{ user.username }}</h3>
            <p>{{ user.bio }}</p>
            <button @click="createFollow" id="follow-btn" v-if="userFollow == false">Follow</button>
            <button @click="createFollow" id="following-btn" v-if="userFollow == true">Following</button>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'
import axios from 'axios'

    export default {
        name: "user",
        data() {
            return {
                userFollow: false,
                token: cookies.get("loginToken"),
            }
        },
        props: {
            user: {
                type: Object,
                required: true
            } 
        },
        methods: {
            viewOtherUser: function() {
                cookies.set("otherId", this.user.userId),
                this.$router.push("OtherProfile")
            },
            createFollow: function() {
               axios.request({
                   url: "https://tweeterest.ml/api/follows",
                   method: "POST",
                   headers: {
                    "Content-Type": "application/json",
                    "X-Api-Key": "NvrMZ9Fj0jRrjYf2As0M7gpnhYC7k4ltci5mZkZGGeY2G"
                   },
                   data: {
                       loginToken: this.token,
                       followId: this.user.userId
                   }
               }).then((response) => {
                   console.log(response);
                   this.userFollow = true;
               }).catch((error) => {
                   console.log(error)
               })
           },
        },
        computed: {
            UserPhoto() {
                return this.$store.getters.userUrl
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

#user {
    height: 40vh;
    width: 90%;
    display: grid;
    justify-items: center;
    align-items: center; 
    border: 1px solid #AAB8C2;
    border-radius: 2em;
    grid-template-rows: 40% 60%;
    row-gap: 1vh;
}

#container-1 {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    img {
        width: 50%;
        object-fit: cover;
        border-radius: 50%;

    }
}

#container-2 {
    height: 100%;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-rows: 1fr 1.5fr 1.5fr;

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
        }

    p {
        margin: 0 0.5em 0 0.5em;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        text-align: center;
    }

    #follow-btn {
        width: 25vw;
        height: 5vh;
        background-color: white;
        color: #1DA1F2;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border: 1px solid #1DA1F2;
        border-radius: 1.5em;
        font-weight: bold;
    }

     #following-btn {
        width: 25vw;
        height: 5vh;
        background-color: #1DA1F2;
        color: white;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        border-radius: 1.5em;
        font-weight: bold;
        border: none;
    }
}
</style>