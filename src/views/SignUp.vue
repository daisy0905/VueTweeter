<template>
    <div>
        <router-link to="/login">Login</router-link>
        <h1>Sign Up Page</h1>
        <sign-up-form></sign-up-form>
    </div>
</template>

<script>
import SignUpForm from '../components/SignUpForm.vue'
    export default {
        name: "signup-page",
        components: {
            SignUpForm,
        },
    }
</script>

<style lang="scss" scoped>

</style>