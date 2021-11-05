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
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '@/firebase'

    export default {
        name: 'Register',
        data() {
            return {
                email: '',
                password: '',
                auth: {},
                user: null,
            }
        },
        methods: {
            async registerUser() {
                try {
                    this.user = await createUserWithEmailAndPassword(auth, this.email, this.password);
                    console.log(this.user);
                    this.$router.replace({name: 'Login'});
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