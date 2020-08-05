<template>
  <section class="section has-background-white-ter" style="height: 100vh">
    <div class="container px-2">
      <div class="box">
        <h1 class="title is-1 has-text-primary">Start with Invoicer!</h1>

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
          <div class="column">

          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="First Name">
              <b-input
                placeholder="First Name"

              >
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Last Name">
              <b-input
                placeholder="Last Name"
              >

              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="Street">
              <b-input placeholder="Street">
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Apartment No">
              <b-input placeholder="Apartment Number">

              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="City">
              <b-input placeholder="City">


              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Postal Code">
              <b-input placeholder="Postal Code">

              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" >
                  Submit
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
  // const baseUrl = process.env.VUE_APP_API_SERVER;
  // import axios from 'axios';
    export default {
        name: "RegisterBiller.vue"
    }
</script>

<style scoped>

</style>
