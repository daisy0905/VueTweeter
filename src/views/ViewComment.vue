<template>
    <div id="view-comment">
        <div>
            <h3>Comment List</h3>
            <all-comments></all-comments>
        </div>
    </div>
</template>

<script>
import AllComments from "../components/AllComments.vue"

    export default {
        components: {
            AllComments
        },
        methods: {
            backToHome: function() {
                this.$router.push("Profile");
            }
        },
        // computed: {
        //     name: function() {
        //         return this.$store.state.user.username
        //     },
        //     date: function() {
        //         return this.$store.state.user.createdAt
        //     },
        //     tweet: function() {
        //         return this.$store.state.user.content
        //     }
        // },
    }
</script>

<style lang="scss" scoped>

</style>