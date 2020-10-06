<template>
    <div>
        <follower class="followers" v-for="follower in followerList" :key="follower.userId" :follower="follower">

        </follower>
    </div>
</template>

<script>
import Follower from './UserFollower'

    export default {
        name: "all-followings",
        components: {
            Follower
        },
        computed: {
            followerList: function() {
                return this.$store.state.followerList
            }
        }
    }
</script>

<style lang="scss" scoped>
.followers {
    min-height: 15vh;
    width: 90%;
}
</style>