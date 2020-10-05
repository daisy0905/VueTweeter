<template>
    <div>
        <user class="users" v-for="user in userList" :key="user.userId" :user="user">
        </user>
    </div>
</template>

<script>
import User from './User.vue'

    export default {
        name: "all-users",
        components: {
            User
        },
        computed: {
            userList: function() {
                return this.$store.state.userList
            }
        }
    }
</script>

<style lang="scss" scoped>
.users {
    min-height: 5vh;
    width: 90%;
}
</style>