<template>
  <div id="app">
    <div id="nav">
      <nav-bar></nav-bar>
    </div>
    <router-view/>
  </div>
</template>

<script>

  import Vue from 'vue'
  import Buefy from 'buefy'
  import NavBar from './components/NavBar'
  import 'buefy/dist/buefy.css'

export default {
  name: 'App',
  components: {
    NavBar
  }
}

Vue.use(
  Buefy,
)
</script>

<style lang="scss">
  @import 'src/assets/scss/app.scss';
</style>
