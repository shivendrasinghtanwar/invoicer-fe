<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img
          src="../assets/images/invoicerLogo.png"
          width="17%"
        >
      </b-navbar-item>
    </template>
   <!-- <template slot="start">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        Register
      </b-navbar-item>
      <b-navbar-item href="/#/biller-list">
        Biller List
      </b-navbar-item>
    </template>-->

   <!-- <template v-if="!isLoggedIn()" slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary" href="/#/register">
            <strong>Sign up</strong>
          </a>
          <a class="button is-dark" href="/#/login-biller">
            Log in
          </a>
          &lt;!&ndash;<a href="/#/dashboard/biller-list" class="is-dark button has-bac">
            Biller List
          </a>&ndash;&gt;
        </div>
      </b-navbar-item>
    </template>-->
  </b-navbar>
</template>

<script>
  export default {
    name: "NavBar",
    methods:{
      isLoggedIn(){
        if(localStorage.getItem("token")!=null){
          return true
        }
      }
    }
  }
</script>

<style scoped>

</style>
