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
    </div>
</template>

<script>


    export default {
        name: "other-tweets",
        props: {
            tweet: {
                type: Object,
                required: true
            }
        }
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

</style>