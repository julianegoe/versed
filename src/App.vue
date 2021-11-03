<template>
    <Header />
    <div class="view-layout">
        <router-view/>
    </div>
</template>
<script>
import Header from '@/components/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>
<style lang="scss">

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.view-layout {
  padding: 8rem 2rem 2rem 2rem;
}
</style>
