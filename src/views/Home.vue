<template>
  <div class="home">
    <div class="title">
      Your're the Versed!
    </div>
    <div v-if="!$store.state.isLoggedIn" class="btn-section">
      <button v-on:click="goToLogin">Login</button>
      <button v-on:click="goToRegister">Register</button>
    </div>
  </div>
</template>

<script>
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '@/firebase';

export default {
  name: 'Home',
  methods: {
    goToLogin() {
      this.$router.push({name: 'Login'});
    },
    goToRegister() {
      this.$router.push({name: 'Register'});
    }
  },
  mounted() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.$store.dispatch('setLoggedIn');
      } else {
        this.$store.dispatch('setLoggedOut');
      }
    });
  }
}
</script>
<style lang="scss" scoped>
@use '../assets/globals.scss' as *;

.home {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: #64dfdf;
  padding-top: 2.5rem;
  margin-top: 2rem;

  @media(max-width: 500px ) {
        width: 100vw;
    }

  .title {
    font-family: 'Russo One', sans-serif;
    font-size: 10rem;
    font-weight: bold;
    color: #6930c3;

    @media(max-width: 500px ) {
        font-size: 6rem;
    }
  }

  .btn-section {
    padding-top: 2rem;
    display: flex;
    justify-content: space-evenly;

    > button {
      border-radius: 5px;
      border: none;
      background: #5e60ce;
      color: white;
    }
  }
}
</style>
