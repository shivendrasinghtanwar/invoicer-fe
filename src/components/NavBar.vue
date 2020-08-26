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

    <template v-if="user.authenticated" slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a
            class="button is-dark"
            @click="logout()"
          >
            Log out
          </a>
        </div>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>

  export default {
    name: "NavBar",
    data(){
      return{
        user:{
          authenticated:false
        }
      }
    },
    mounted() {
      this.checkAuth();
    },
    methods:{
      checkAuth() {
        let token = localStorage.getItem('token');
        if (token) {
          console.log('user is authenticated');
          this.user.authenticated = true;
        } else {
          this.user.authenticated = false;
        }
      },
      logout(){
        localStorage.removeItem('token');
        this.$router.push("/");
      }
    }
  }
</script>

<style scoped>

</style>
