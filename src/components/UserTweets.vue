<template>
    <div>
        <a-tweet class="tweet" v-for="tweet in tweets" v-bind:key="tweet.userId" :tweet="tweet">
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

</style>