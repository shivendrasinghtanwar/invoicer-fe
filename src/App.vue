<template>
  <div id="app">
<!--    <img alt="Vue logo" src="./assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
<!--    <display-json></display-json>-->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}

import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)
</script>

<style lang="scss">
  @import 'src/assets/scss/app.scss';
</style>
