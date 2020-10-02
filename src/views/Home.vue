<template>
    <div id="home">
        <div id="user-header">
            <img id="user-image" @click="userProfile" :src="UserImage" alt="user image">
            <h3>Home</h3>
            <div></div>
        </div>
        
        <all-tweets id="tweets"></all-tweets>
    </div>
</template>

<script>

import AllTweets from '../components/AllTweets.vue'
import cookies from 'vue-cookies'

    export default {
        components: {
            AllTweets
        },
        
        computed: {
            UserImage() {
                return this.$store.getters.userUrl
            }
        },
        methods: {
            userProfile: function() {
                this.$router.push("Profile"),
                cookies.set("userPicture", this.$store.getters.userUrl)
            }
        },
        // mounted: function() {
        //     this.$store.dispatch("getTweets")
        // }
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
    
    #user-header {
        height: 10vh;
        width: 90%;
        display: grid;
        grid-template-columns: 20% 20% 60%;
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
    }

    #tweets {
        min-height: 90vh;
        display: grid;
        justify-items: center;
        align-items: center; 
    }


}



</style>