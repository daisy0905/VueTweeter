<template>
    <div id="all-comments">
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
        }
    }
</script>

<style lang="scss" scoped>
#all-comments {
    width: 100%;
    min-height: 30vh;
    display: grid;
    justify-items: center;
    align-items: center;
    row-gap: 1vh; 
}
</style>