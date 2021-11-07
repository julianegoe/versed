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

#app {
  font-family: Arial, Helvetica, sans-serif;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
.view-layout {
  padding: auto;
}
</style>
