<template>
    <div>
        <div id="container-1">
            <h3>{{ tweet.username }}</h3>
            <h4>{{ tweet.created_at }}</h4>
            <div></div>
        </div>
        <div id="container-2">
            <p>{{ tweet.content }}</p>
        </div>
        <div id="container-3">
            <div></div>
            <div class="unit">
                <img @click="createComment" src="https://www.kindpng.com/picc/m/153-1537658_twitter-comment-icon-png-clipart-png-download-topic.png" alt="tweeter comment icon">
                <!-- <h5>{{ commentNum }}</h5> -->
            </div>
            <div class="unit">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-xxei2BZj50qLOyvtuvF7s3RmxqMPoT9wNg&usqp=CAU" alt="tweeter like icon">
                <!-- <h5>{{ likeNum }}</h5> -->
            </div>
            <div></div>
        </div>
    </div>
</template>

<script>
import cookies from 'vue-cookies'

    export default {
        name: "other-tweets",
        props: {
            tweet: {
                type: Object,
                required: true
            }
        },
        methods: {
            createComment: function() {
                cookies.set("tweetUsername", this.tweet.username);
                cookies.set("tweetTime", this.tweet.created_at);
                cookies.set("tweetTweetId", this.tweet.tweetId);
                cookies.set("tweetContent", this.tweet.content);
                this.$router.push("Comment")
            }
        },
    }
</script>

<style lang="scss" scoped>
* {
    scroll-behavior: smooth;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

#container-1 {
    width: 100%;
    height: 5vh;
    grid-template-columns: 30% 50% 20%;
    display: grid;
    justify-items: center;
    align-items: center; 
    background-color:  #E1E8ED;
    border-bottom: 1px solid #1DA1F2;
    margin-top: 2em;

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        color: #657786;
    }
}

#container-2 {
    width: 100%;
    min-height: 10vh;
    display: grid;
    justify-items: center;
    align-items: center; 
    margin-top: 0.5em;
    
    p {
        width:90%;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
    }
}

#container-3 {
    width: 100%;
    height: 5vh;
    display: grid;
    justify-items: center;
    align-items: center; 
    margin-top: 1em;
    grid-template-columns: 1fr 2fr 2fr 1fr;
    

    .unit {
        height: 100%;
        width: 100%;
        display: grid;
        justify-items: center;
        align-items: center;

        img {
            width: 20px;
        }

        h5 {
            font-weight: bold; 
            font-family: Arial, Helvetica, sans-serif;
            font-size: 0.8rem;
            color: #AAB8C2;
        }
    }
    
    
}

</style>