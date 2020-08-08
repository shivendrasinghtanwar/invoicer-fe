<template>
  <section >
    <div class="columns ">
      <div class="column is-2 ">
        <section class="section same-page-height" style="position: sticky " >this </section>
      </div>
      <div class="column same-page-height pb0">
        <router-view></router-view>
      </div>
    </div>

  </section>
</template>

<script>
  export default {
    name: "Dashboard",
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
