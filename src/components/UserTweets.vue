<template>
    <div>
        <a-tweet class="tweets" v-for="tweet in tweets" v-bind:key="tweet.tweetId" :tweet="tweet">
        </a-tweet>
    </div>
</template>

<script>
import ATweet from "./ATweet.vue"
    export default {
        name: "user-tweets",
        components: {
            ATweet
        },

        computed: {
            tweets: function() {
                return this.$store.state.tweets;
            }
        }
    }
</script>

<style lang="scss" scoped>
.tweets {
    min-height: 5vh;
    width: 100%;
    display: grid;
    justify-items: center;
    align-items: center; 
}
</style>