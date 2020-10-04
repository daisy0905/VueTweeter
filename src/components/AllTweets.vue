<template>
    <div>
        <a-tweet class="tweet" v-for="tweet in tweetList" v-bind:key="tweet.tweetId" :tweet="tweet">
        </a-tweet>
    </div>
</template>

<script>
import ATweet from "./ATweet.vue"

    export default {
        name: "all-tweets",
        components: {
            ATweet
        },
        computed: {
            tweetList: function() {
                return this.$store.state.tweetList;
            }
        }
    }
</script>

<style lang="sass" scoped>
    
</style>