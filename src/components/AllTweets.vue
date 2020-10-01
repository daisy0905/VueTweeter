<template>
    <div>
        <div v-for="tweet in tweets" :key="tweet.id">
            <h2>{{ tweet.username }}</h2>
            <h4>{{ tweet.createdAt}}</h4>
            <h3>{{ tweet.content }}</h3>
        </div>
    </div>
</template>

<script>
    export default {
        name: "all-tweets",
        computed: {
            tweets: function() {
                return this.$store.state.tweets;
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>