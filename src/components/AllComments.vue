<template>
    <div>
        <comment class="comments" v-for="comment in commentList" :key="comment.commentId" :comment="comment">
        </comment>
    </div>
</template>

<script>
import Comment from "./AComment.vue"

    export default {
        name: "all-comments",
        components: {
            Comment
        },
        computed: {
            commentList: function() {
                return this.$store.state.commentList;
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>