<template>
    <div id="tweet-unit">
        <h2>{{ tweet.username }}</h2>
        <h3>{{ tweet.created_at }}</h3>
        <p>{{ tweet.content }}</p>
    </div>
</template>

<script>

    export default {
        name: "a-tweet",
        props: {
            tweet: {
                type: Object,
                required: true
            }
        }
    }
       
</script>

<style lang="scss" scoped>

</style>