<template>
    <div id="home">
        <div id="user-header">
            <div id="user-image">
                <img @click="userProfile" :src="UserImage" alt="user image">
            </div>
            <h3>Home</h3>
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

template {
    min-height: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}

#home {
    min-height: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
    
    #user-header {
        height: 10vh;
        display: grid;
        grid-template-columns: 10% 10% 80%;
        justify-items: center;
        align-items: center; 

        #user-image {
            height: 90%;
        }

        h3 {
            height: 100%;
            font-weight: bold; 
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