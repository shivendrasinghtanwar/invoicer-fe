<template>
  <section class="section has-text-weight-semibold">
    <b-menu>
      <b-menu-list label="Invoices">
        <b-menu-item
          icon="plus-box"
          label="Make Invoice"
          tag="router-link"
          to="/dashboard/add-invoice"

        />
        <b-menu-item
          icon="format-list-bulleted-square"
          label="List Invoices"
          tag="router-link"
          to="/dashboard/list-invoices"

        />
      </b-menu-list>
      <b-menu-list label="Products">
<!--        <b-menu-item label="Expo" icon="link" tag="router-link" target="_blank" to="/expo"></b-menu-item>-->
      </b-menu-list>
      <b-menu-list label="Payers">
<!--        <b-menu-item label="Logout"></b-menu-item>-->
      </b-menu-list>
    </b-menu>
  </section>

</template>

<script>
  export default {
    name: "SideBar"
  }
</script>

<style scoped>

</style>
