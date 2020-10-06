<template>
    <div id="following">
        <div id="container-1">
            <img @click="backToProfile" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvz8HF_jjIpaNgkrFzcw9E2N9Y6SA13DfCcQ&usqp=CAU" alt="icon of back to home page">
            <h3>{{ name }}</h3>
            <div></div>
        </div>
        <div id="container-2">
            <div class="user-follow">
                <div></div>
                <h5>{{ followingNum }}</h5>
                <h4 @click="getFollowing">Following</h4>
                <div></div>
            </div>
            <div class="user-follow">
                <div></div>
                <h5>{{ followerNum }}</h5>
                <h4 @click="getFollower">Follower</h4>
                <div></div>
            </div>
        </div>
        <all-user-following class="follow" v-if="follow == true"></all-user-following>
        <all-user-follower class="follow" v-else-if="follow == false"></all-user-follower>
    </div>
</template>

<script>
import AllUserFollowing from '../components/AllUserFollowing.vue'
import AllUserFollower from '../components/AllUserFollower.vue'

    export default {
        components: {
            AllUserFollowing,
            AllUserFollower
        },
        data() {
            return {
                follow: true
            }
        },
        methods: {
            getFollowing: function() {
                this.follow = true;
            },
            getFollower: function() {
                this.follow = false;
            },
            backToProfile: function() {
                this.$router.push("Profile")
            }
        },
        computed: {
            name: function() {
                return this.$store.state.user.username;
            },
            followingNum: function() {
                return this.$store.state.followList.length;
            },
            followerNum: function() {
                return this.$store.state.followerList.length;
            },
        },
        mounted () {
            this.$store.dispatch("getFollowing");
            this.$store.dispatch("getFollower");
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

#following {
    min-height: 30vh;
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
    height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr 1fr;


    .user-follow {
        height: 5vh;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;
        grid-template-columns: 1fr 1.5fr 1.5fr 1fr;

        h5 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            color: #AAB8C2;
        }

        h4 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            color: #1DA1F2;
        }
    }
}

.follow {
    min-height: 50vh;
}
</style>