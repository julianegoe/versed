<template>
    <div>
        <form @submit.prevent="loginUser">
            <div class="email">
                <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="password">
                <input v-model="password" type="password" placeholder="Password" />
            </div>
            <button type="submit">Log In</button>

        </form>

    </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'

    export default {
        name: 'Login',
        data() {
            return {
                email: '',
                password: '',
            }
        },
        methods: {
            async loginUser() {
                console.log(this.email);
                console.log(this.password);
                try {
                    await signInWithEmailAndPassword(auth, this.email, this.password);
                    this.$router.replace({name: 'Verses'})
                } catch (error) {
                    console.log(error);
                }

            }
        }
    }
</script>

<style lang="scss" scoped>
@use '../assets/globals.scss' as *;

</style>