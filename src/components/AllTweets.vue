<template>
    <div>
        <tweet class="tweets" v-for="tweet in tweetList" v-bind:key="tweet.tweetId" :tweet="tweet">
        </tweet>
    </div>
</template>

<script>
import Tweet from "./ATweet.vue"

    export default {
        name: "all-tweets",
        components: {
            Tweet
        },
        computed: {
            tweetList: function() {
                return this.$store.state.tweetList;
            }
        }
    }
</script>

<style lang="scss" scoped>
.tweets {
    min-height: 5vh;
    width: 90%;
}
</style>