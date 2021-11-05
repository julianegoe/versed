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

* {
  box-sizing: border-box;
}

body {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.view-layout {
  padding: auto;
}
</style>
