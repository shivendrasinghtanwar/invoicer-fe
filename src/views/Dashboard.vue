<template>
  <section>
    <div class="columns">
      <div class="column is-2 ">
        <side-bar />
      </div>
      <div class="column same-page-height pb0 has-background-white-ter">
        <router-view />
      </div>
    </div>
  </section>
</template>

<script>
  import SideBar from "../components/SideBar";
  export default {
    name: "Dashboard",
    components: {SideBar},
    data() {
      return {
        open: true,
        overlay: true,
        fullheight: true,
        fullwidth: false,
        right: false
      };
    }
  };
</script>

<style scoped>
  .p-1 {
    padding: 1em;
  }
</style>
