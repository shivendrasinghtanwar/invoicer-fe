<template>
  <section class="section">
    <div class="columns mb5">
      <div class="column">
        <h1 class="title has-text-primary has-text-centered">
          Choose your template!
        </h1>
      </div>
    </div>
    <div class="columns has-text-centered">
      <div class="column">
        <img
          src="../assets/images/invoice_with_freetext.png"
          alt="Invoice with free text"
          class="has-light-dark-border"
          @click="openInvoiceForm(1)"
        >
      </div>
      <div class="column  shadow-on-hover">
        <img
          src="../assets/images/invoice_without_freetext.png"
          alt="Invoice without free text"
          class="has-light-dark-border"
          @click="openInvoiceForm(2)"
        >
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "AddInvoice",
    methods:{
      openInvoiceForm(invoiceTemplateNumber){
        this.$router.push("/dashboard/invoice-form?template="+invoiceTemplateNumber);
      }
    }
  }
</script>

<style scoped>
  img:hover{
    -webkit-box-shadow: 0 12px 28px -6px rgba(0,0,0,0.48);
    -moz-box-shadow: 0 12px 28px -6px rgba(0,0,0,0.48);
    box-shadow: 0 12px 28px -6px rgba(0,0,0,0.48);
    transform: scale(1.1);
    transition: 0.5s ease;
  }

</style>
