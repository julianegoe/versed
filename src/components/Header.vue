<template>
    <div class="header">
        <div class="header__left">
        <router-link to="/">
            <img src="../assets/icons/house-door.svg" alt="Bootstrap" width="32" height="32">
        </router-link>
        <router-link v-if="isLoggedIn" to="/verses">
            <img src="../assets/icons/pencil-square.svg" alt="Bootstrap" width="32" height="32">
        </router-link>
        <router-link v-if="!isLoggedIn" to="/login">Login</router-link>
        <router-link v-if="!isLoggedIn" to="/register">Register</router-link>
        </div>
        <a class="header__right" v-if="isLoggedIn" v-on:click.prevent="signOut">
            <img src="../assets/icons/box-arrow-in-right.svg" alt="Bootstrap" width="32" height="32">
        </a>
    </div>
</template>

<script>
import { getAuth, signOut, onAuthStateChanged } from "firebase/auth";
import * as firebase from 'firebase/app';
const config = {
    apiKey: process.env["VUE_APP_API_KEY"],
    authDomain: process.env["VUE_APP_AUTH_DOMAIN"],
    projectId: process.env["VUE_APP_PROJECT_ID"],
    storageBucket: process.env["VUE_APP_STORAGE_BUCKET"],
    messagingSenderId: process.env["VUE_APP_MESSAGING_SENDER_ID"],
    appId: process.env["VUE_APP_APP_ID"],
};

firebase.initializeApp(config);

const auth = getAuth();

    export default {
        name: 'Header',
        data() {
            return {
                isLoggedIn: false,
            }
        },
        methods: {
            async signOut() {
                try {
                    await signOut(auth);
                } catch (error) {
                    console.log(error);
                } 

            }
        },
        mounted() {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.isLoggedIn = true;
                    const uid = user.uid;
                    console.log(uid);
                } else {
                    this.isLoggedIn = false;
                    this.$router.replace({name: 'Login'})
                }
            });
        }
    }
</script>

<style lang="scss" scoped>

.header {
    position: absolute;
    width: 100%;
    height: 2rem;
    padding: 0.5rem;
    background-image: linear-gradient(90deg, blue, red);
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        padding-right: 1rem;
        color: white;
        font-weight: bold;
    }

    .header__left, .header__right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .header__right {
        cursor: pointer;
    }
}

</style>