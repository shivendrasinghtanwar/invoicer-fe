<template>
  <section class="section">
    <b-collapse
      :open="true"
      animation="slide"
      aria-id="contentIdForA11y3"
      class="card"
    >
      <div
        slot="trigger"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3">
        <p class="card-header-title">
          Mail
        </p>
        <a class="card-header-icon">
          <b-switch
            v-model="preferences.mail.useThis"
            passive-type="primary"
          />
        </a>
      </div>
      <div class="card-content mb5">
        <div class="content">
          <div class="columns">
            <div class="column is-half">
              <p class="has-text-weight-semibold mt5">The payer will receive the mail shown in image from -
                <span class="has-text-primary">no-reply@invoicer.com</span>
              </p>
              <b-field label="Payer Email" class="mt5">
                {{ preferences.mail.emailId }}
              </b-field>
              <b-field label="Mail Subject" class="mt5">
                <b-input maxlength="80" type="text" v-model="preferences.mail.subject" />
              </b-field>
              <b-field label="Mail Message" class="mt5">
                <b-input maxlength="200" type="textarea" v-model="preferences.mail.message" />
              </b-field>
            </div>
            <div class="column has-background-white-ter">
              <section class="section " style="padding-bottom: 0!important;padding-top: 1rem!important;">
                <div class="columns">
                  <div class="column">
                    <p class="box" style=" border-radius: 1px!important;">
                      <span class="has-text-weight-bold">Subject : </span>
                      {{ preferences.mail.subject }}
                    </p>
                  </div>
                </div>
              </section>
              <section class="section" style="padding-top: 1.7rem !important;">
                <mail-template :invoice="invoice" :preferences="preferences"></mail-template>
              </section>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>


    <section
      style="
             position: fixed;
             bottom: 0;
             left: 0;
             width: 100%;
     ">
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column has-background-dark pb2 pr2 has-text-right">
          <button
            class="is-primary button mt1 ml2"
            @click="setPreferencesContinue"
          >
            Continue
          </button>
        </div>
      </div>
    </section>

  </section>
</template>

<script>
  import axios from "axios";
  import MailTemplate from "../../components/MailTemplate";
  const baseUrl = process.env.VUE_APP_API_SERVER;
  export default {
    name: "SelectChannelForInvoice",
    components: {MailTemplate},
    data(){
      return{
        invoice:{},
        preferences:{
          mail:{
            useThis:true,
            emailId:'',
            subject:'Invoicer: you have a new invoice',
            message:'Here is your latest invoice.',
          }
        }
      }
    },
    mounted() {
      this.axiosInstance = axios.create({
        baseURL: baseUrl,
        timeout: 50000,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });

      this.getInvoiceInfo();
    },
    methods:{
      getInvoiceInfo(){
        this.axiosInstance.get('/invoice/'+this.$route.query.invoiceId)
          .then(response=>{
            console.log(response.data)
            this.invoice = response.data;
            this.preferences.mail.emailId = this.invoice.data.payerEmail
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
      },
      setPreferencesContinue(){
        this.$router.push('/dashboard/invoice-checkout?invoiceId='+this.$route.query.invoiceId)
      }
    }
  }
</script>

<style scoped>

</style>
