<template>
    <div class="header">
        <div class="header__left">
        <a @click="$router.push({name: 'Home'})">
            <img src="../assets/icons/house-door.svg" alt="Bootstrap" width="32" height="32">
        </a>
        <a v-if="isLoggedIn" @click="$router.push({name: 'Verses'})">
            <img src="../assets/icons/pencil-square.svg" alt="Bootstrap" width="32" height="32">
        </a>
        </div>
        <div class="header__right">
            <a v-if="isLoggedIn" v-on:click.prevent="signOut">
                <img src="../assets/icons/box-arrow-in-right.svg" alt="Bootstrap" width="32" height="32">
            </a>
        </div>
    </div>
</template>

<script>
import { signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase'

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
    width: 100%;
    background-image: linear-gradient(90deg, blue, red);
    display: flex;
    justify-content: space-between;
    align-items: center;

    .header__left {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;

        > a {
        padding-right: 1rem;
        color: white;
        font-weight: bold;
        cursor: pointer;
    }
    }

    .header__right {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
        cursor: pointer;
    }
}

</style>