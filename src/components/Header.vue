<template>
    <div class="header">
        <div class="header__left">
        <a @click="$router.push({name: 'Home'})">
            Home
        </a>
        <a v-if="isLoggedIn" @click="$router.push({name: 'Verses'})">
            Verses
        </a>
        </div>
        <div class="header__right">
            <a v-if="isLoggedIn" @click="$router.push({name: 'Profile'})">
                Profile
            </a>
            <a v-if="isLoggedIn" v-on:click.prevent="signOut">
                Log Out
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
    background-image: linear-gradient(90deg, #7400b8, #80ffdb);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 100;

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
        
        > a {
        color: white;
        font-weight: bold;
        cursor: pointer;
        padding-right: 1rem;
        }
    }
}

</style>