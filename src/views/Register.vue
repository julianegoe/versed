<template>
    <div>
        <form @submit.prevent="registerUser">
            <div class="email">
                <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="Password" />
            </div>
            <button type="submit">Register</button>
        </form>

    </div>
</template>

<script>
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import * as firebase from 'firebase/app';
const config = {
    apiKey: process.env["API_KEY"],
    authDomain: process.env["AUTH_DOMAIN"],
    projectId: process.env["PROJECT_ID"],
    storageBucket: process.env["STORAGE_BUCKET"],
    messagingSenderId: process.env["MESSAGING_SENDER_ID"],
    appId: process.env["APP_ID"],
};

firebase.initializeApp(config);
const auth = getAuth()

    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                auth: {},
            }
        },
        methods: {
            async registerUser() {
                try {
                    const user = await createUserWithEmailAndPassword(auth, this.email, this.password);
                    console.log(user);
                    this.$router.replace({name: 'Login'});
                    return user
                } catch (error) {
                    console.log(error);
                }

            }
        },
    }
</script>

<style lang="scss" scoped>
@use '../assets/globals.scss' as *;

</style>