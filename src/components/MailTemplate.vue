<template>
  <div class="box" style="border-radius: 1px!important;">

    <div class="columns">
      <div class="column">
        <img
          src="../assets/images/invoicerLogo.png"
          width="13%"
        >
      </div>
    </div>

    <div class="columns mt1">
      <div class="column">
        <p>Hi {{invoice.data.payerName }},</p>
        <p>{{ preferences.mail.message }}</p>
      </div>
    </div>
    <hr>
    <div class="columns ">
      <div class="column is-half">
        <p class="subtitle mt1 has-text-black has-text-weight-bold">Rs 30.00</p>
        <p> Due date - 27/08/2020 </p>
      </div>
      <div class="column has-text-right ">
        <button class="button is-primary is-rounded has-text-weight-bold">Pay Invoice</button>
        <br/>
        <button class="button is-white mt1 is-rounded has-text-weight-bold"> Download</button>
      </div>
    </div>
    <hr>
    <p class="has-text-weight-bold">Invoice information</p>
    <div class="columns">

      <div class="column is-half">
        <p>Invoice Number : </p>
        <p>Created at : </p>
        <p> Total no. of products :</p>
      </div>
      <div class="column">
        <p> {{ invoice.data.invoiceNumber }}</p>
        <p> {{ invoice.createdAt | formatDate}} </p>
        <p> {{ invoice.data.products.length}} </p>
      </div>
    </div>
    <hr>
    <div class="columns">
      <div class="column">
        Regards<br/>
        shivendra@io.com
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "MailTemplate",
    props: ['invoice','preferences'],
    data(){
      return{

      }
    },mounted() {
      console.log('mail template ',this.$data.invoice)
    }
  }
</script>

<style scoped>

</style>
