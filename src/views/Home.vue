<template>
  <div class="home">
    <div class="title">
      Your're the Versed!
    </div>
    <router-link to="/login">Login</router-link>
    <router-link to="/register">Register</router-link>
  </div>
</template>

<script>

export default {
  name: 'Home',
}
</script>
<style lang="scss" scoped>

.home {
  width: 100%;
  background: #64dfdf;

  @media(max-width: 500px ) {
        width: 100vw;
    }

  .title {
    font-size: 5rem;
    font-weight: bold;
    color: #6930c3;

  }
}
</style>
