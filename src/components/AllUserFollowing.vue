<template>
    <div>
        <following class="followings" v-for="follow in followList" :key="follow.userId" :follow="follow">

        </following>
    </div>
</template>

<script>
import Following from './Userfollowing'

    export default {
        name: "all-followings",
        components: {
            Following
        },
        computed: {
            followList: function() {
                return this.$store.state.followList
            }
        }
    }
</script>

<style lang="scss" scoped>
.followings {
    min-height: 15vh;
    width: 90%;
}
</style>