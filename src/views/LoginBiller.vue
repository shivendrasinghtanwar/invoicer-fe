<template>
  <section class="section has-background-light" style="min-height: 89.8vh;">
    <div class="columns mt3">
      <div class="column is-4 is-offset-4 box">
        <h1 class="title has-text-primary has-text-centered is-1">Invoicer</h1>
        <div class="columns">
          <div class="column">
            <b-field label="Email">
              <b-input
                placeholder="Email"
                type="email"
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <b-field label="Password">
              <b-input
                placeholder="Password"
                type="password"
              >
              </b-input>
            </b-field>
          </div>
        </div>
        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" >
                  Login
                </button>
              </p>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column has-text-centered has-text-black ">
            <a href="/#/register">Don't have an account? </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "LoginBiller"
  }
</script>

<style scoped>

</style>
