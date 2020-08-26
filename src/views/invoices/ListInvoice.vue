<template>
  <section class="section ">
    <div class="card columns">
      <div class="column">
        <b-table
          :data="invoices"
          :detailed="true"
          :mobile-cards="true">

          <template slot-scope="props">
            <b-table-column
              field="invoiceDate"
              label="Invoicing Date"
              width="200"
            >
              {{ props.row.createdAt | formatDate }}
            </b-table-column>
            <b-table-column
              field="invoiceNumber"
              label="Invoice Number"
              width="200"
            >
              {{ props.row.data.invoiceNumber }}
            </b-table-column>
            <b-table-column
              field="payerName"
              label="Payer Name"
              width="200"
            >
              {{ props.row.data.payerName }}
            </b-table-column>
            <b-table-column
              field="total"
              label="Total"
              width="200"
            >
              {{ props.row.data.total }}
            </b-table-column>
            <b-table-column
              field="status"
              label="Status"
              width="200"
            >
            <span v-if="props.row.statusCode===1010">
              <button class="button is-draft has-text-weight-semibold">DRAFT</button>
            </span>
            </b-table-column>
            <b-table-column
              field="actions"
              label="Actions"
              width="100"
            />
          </template>

          <template slot="detail" slot-scope="props">
            <div class="columns">
              <div class="column is-half"></div>
              <div class="column card">
                <b-table
                  :data="props.row.data.products"
                  :striped="true"
                  :mobile-cards="true">
                  <template slot-scope="productProps">
                    <b-table-column
                      field="name"
                      label="Name"
                    >
                      {{ productProps.row.name }}
                    </b-table-column>
                    <b-table-column
                      field="description"
                      label="Description"
                    >
                      {{ productProps.row.description }}
                    </b-table-column>
                    <b-table-column
                      field="price"
                      label="Price"
                    >
                      {{ productProps.row.price }}
                    </b-table-column>
                    <b-table-column
                      field="quantity"
                      label="Quantity"
                    >
                      {{ productProps.row.quantity }}
                    </b-table-column>
                    <b-table-column
                      field="total"
                      label="Total"
                    >
                      {{ productProps.row.price * productProps.row.quantity }}
                    </b-table-column>
                  </template>
                </b-table>
              </div>
            </div>
          </template>
        </b-table>
      </div>
    </div>
  </section>
</template>

<script>
  import axios from "axios";
  const baseUrl = process.env.VUE_APP_API_SERVER;




  export default {
    name: "ListInvoice",
    components: {
    },
    data() {
      return {
        invoices:[]
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
      this.getAllInvoices();
    },
    methods:{

      getAllInvoices(){
        this.axiosInstance.get(baseUrl+'/invoice')
          .then(response =>{
            console.log('Get all invoices response',response.data);
            this.$data.invoices = response.data;

          })
          .catch(error => {
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
