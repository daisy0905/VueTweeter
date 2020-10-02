<template>
    <div id="profile">
        <div id="header">
            <div id="container-1">
                <img @click="backToHome" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
                <h3>{{ name }}</h3>
                <div></div>
            </div>
            <div id="container-2">
                <img src="../assets/background-landing.png" alt="">
            </div>
            <div id="container-3">
                <div id="user-image">
                    <img :src="UserPhoto" alt="user image">
                    <h3>{{name}}</h3>
                </div>
                <div id="profile-btn">
                    <button @click="viewProfile">Edit Profile</button>
                </div>
            </div>
            <div id="container-4">
                <h4>{{ bio }}</h4>
                <h5>Birthdate: {{ birthdate }}</h5>
            </div>
        </div>
        <div id="tweets">

        </div>

    </div>
</template>

<script>
import cookies from 'vue-cookies'

    export default {
        data() {
            return {
                UserPhoto: cookies.get("userPicture"),
            }
        },
        methods: {
            viewProfile: function() {
                this.$store.dispatch("getProfile");
                this.$router.push("UserIntro");
            },
            backToHome: function() {
                this.$router.push("Home");
            }
        },
        computed: {
            name: function() {
                return this.$store.state.user.username
            },
            bio: function() {
                return this.$store.state.user.bio
            },
            birthdate: function() {
                return this.$store.state.user.birthdate
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

#profile {
    min-height: 100vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}

#header {
    min-height: 40vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
}

#container-1 {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: center;
    grid-template-columns: 10% 15% 75%;

    img {
        width: 5vw;
    }

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }
}

#container-2 {
    min-height: 20vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;

    img {
        width: 100%;
        height: 20vh;
        object-fit: cover;
    }
}

#container-3 {
    min-height: 10vh;
    width: 100%;
    display: grid;
    grid-template-columns: 70% 30%;

    #user-image {
        width: 100%;
        min-height: 10vh;
        display: grid;
        grid-template-rows: 80% 20%;
        position: relative;

        img {
            width: 100px;
            height: 100px;
            object-fit: cover;
            border-radius: 50%;
            display: grid;
            justify-items: left;
            align-items: center;
            margin-left: 1em;
            position: absolute;
            top: -5vh;
            border: 2px solid white;
        }

        h3 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-weight: bold;
            font-size: 1rem;
            position: absolute;
            top: 10vh;
            left: 12vw;
        }
    }

    #profile-btn {
        display: grid;
        justify-items: center;
        align-items: center;
        width: 100%;

        button {
            width: 25vw;
            height: 5vh;
            background-color: #1DA1F2;
            color: white;
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            border: none;
            border-radius: 1.5em;
            font-weight: bold;
        }
    }
}

#container-4 {
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: left;
    align-items: center;
    margin-top: 4vh;

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem; 
        margin-bottom: 1em;
    }

    h5 {
       
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.7rem; 
        color: grey;
    }
}

#tweets {
    min-height: 100vh;
}


</style>