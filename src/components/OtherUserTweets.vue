<template>
    <div>
        <div id="container-1">
            <h3>{{ tweet.username }}</h3>
            <h4>{{ tweet.created_at }}</h4>
            <div></div>
        </div>
        <p>{{ tweet.content }}</p>
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
    background-color: #E1E8ED;
    opacity: 0.7;
    margin-top: 1em;

    h3 {
        font-weight: bold; 
        font-family: Arial, Helvetica, sans-serif;
        font-size: 1rem;
    }

    h4 {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 0.8rem;
        color: #AAB8C2;
    }
}
    
p {
    height: 10vh;
    width: 90%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8rem;
    margin-top: 1em;
    display: grid;
    justify-items: center;
    align-items: center; 
    background-color: #E1E8ED;

}

</style>