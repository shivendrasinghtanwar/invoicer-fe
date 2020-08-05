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
                v-model="biller.email"
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
                v-model="biller.name.first"
              >
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Last Name">
              <b-input
                placeholder="Last Name"
                v-model="biller.name.last"
              >

              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="Street">
              <b-input placeholder="Street"
              v-model="biller.address.street">
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Apartment No">
              <b-input placeholder="Apartment Number"
                       v-model="biller.address.apartmentNumber">

              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <b-field label="City">
              <b-input placeholder="City"
                       v-model="biller.address.city"
              >
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Postal Code">
              <b-input placeholder="Postal Code"
                       v-model="biller.address.postalCode"
              >
              </b-input>
            </b-field>
          </div>
        </div>

        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-centered">
              <p class="control">
                <button class="button is-primary" @click="registerBiller">
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
  const baseUrl = process.env.VUE_APP_API_SERVER;
  import axios from 'axios';

    export default {
        name: "RegisterBiller.vue"
  , mounted() {
    this.axiosInstance = axios.create({
      baseURL: baseUrl,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  },
      data(){
          return {
            biller:{
              email:"",
              name:{
                first:"",
                last:""
              },
              address:{
                street:"",
                apartmentNumber:"",
                city:"",
                postalCode:"",
                country:"India"
              }
            }
          }
      },
      methods:{
          registerBiller(){
            this.axiosInstance.post('/biller',this.$data.biller)
            .then(response=>{
              console.log(response);
              this.$buefy.toast.open({
                duration: 3000,
                message: `Biller Registered`,
                position: 'is-bottom',
                type: 'is-success'
              })
              this.$router.push('/biller-list');
            })
            .catch(error=>{
              console.error(error);
              this.$buefy.toast.open({
                duration: 3000,
                message: `Something went wrong`,
                position: 'is-bottom',
                type: 'is-danger'
              })
            })
          }
      }
    }
</script>

<style scoped>

</style>
