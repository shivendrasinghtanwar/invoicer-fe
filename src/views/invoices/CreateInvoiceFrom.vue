<template>
  <section class="section">
    <section class="box">
      <!--<p class="subtitle has-text-primary has-text-weight-bold ">
        Payer Info
      </p>-->
      <div class="columns">
        <div class="column">
          <b-field label="Payer Name">
            <b-input
              placeholder="Payer Name"
              v-model="invoice.payerName"
            />
          </b-field>

          <b-field label="Payer Email">
            <b-input
              placeholder="Payer Email"
              type="email"
              v-model="invoice.payerEmail"
            />
          </b-field>
        </div>
        <div class="column">
          <b-field label="Due Date">
            <b-datepicker
              :show-week-number="false"
              placeholder="Due Date"
              icon="calendar-today"
              trap-focus
            />
          </b-field>
          <b-field label="Invoice Number">
            <b-input
              placeholder=""
              disabled
              v-model="invoice.invoiceNumber"
              custom-class="has-text-primary has-text-weight-semibold"
            />
          </b-field>
        </div>
        <div class="column">
          <div class=" has-text-centered">
            <b-field>
              <b-upload
                v-model="dropFiles"
                drag-drop
                expanded
              >
                <section class="section">
                  <div class="content has-text-centered">
                    <p>
                      <b-icon
                        icon="upload"
                        size="is-large"
                      />
                    </p>
                    <p>Choose logo for Invoice</p>
                  </div>
                </section>
              </b-upload>
            </b-field>
          </div>
        </div>
      </div>
    </section>
    <!--  Free text 1  -->
    <section class="box mt1"
             v-if="invoice.templateNo===1">
      <b-field
        label="Free Text"
      >
        <b-input
          maxlength="200"
          type="textarea"
          v-model="invoice.freeTextOne"
        ></b-input>
      </b-field>

    </section>
    <!-- Product Table -->
    <section class="box mt1">
      <!--<p class="subtitle has-text-primary has-text-weight-bold ">
        Products
      </p>-->

      <div class="columns">
        <div class="column">
          <b-table
            :data="invoice.products"
            :bordered="false"
            :striped="false"
            :narrowed="false"
            :hoverable="false"
            :loading="false"
            :focusable="false"
            :mobile-cards="true"
          >
            <template slot-scope="props">
              <b-table-column
                field="id"
                label="S.No."
                width="60"
                class="has-text-centered"
              >
                {{props.row.id}}
              </b-table-column>

              <b-table-column
                field="name"
                label="Name"
                width="200"
              >
                <b-input
                  v-model="props.row.name"
                  placeholder="Name"
                />
              </b-table-column>

              <b-table-column
                field="description"
                label="Description"
                width="400"
              >
                <b-input
                  v-model="props.row.description"
                  placeholder="Description"
                />
              </b-table-column>

              <b-table-column
                field="price"
                label="Price"
                width="200"
                numeric
              >
                <b-input
                  v-model="props.row.price"
                  placeholder="Price"
                  @input="calculateTotal"
                  type="number"
                  min="10"
                />
              </b-table-column>

              <b-table-column
                field="quantity"
                label="Quantity"
                width="200"
                numeric
              >
                <b-input
                  v-model="props.row.quantity"
                  placeholder="Quantity"
                  @input="calculateTotal"
                  type="number"
                  min="10"
                />
              </b-table-column>

              <b-table-column
                field="Total"
                label="Total"
                width="160"
                numeric
              >
                {{ props.row.quantity * props.row.price }}
              </b-table-column>

              <b-table-column
                field="remove"
                label="Remove"
                width="60"
                class="has-text-centered ">
                <fa-icon icon="times" size="md" @click="removeProduct(props.row.id)"/>
              </b-table-column>
            </template>

            <template slot="empty">
              <section class="section">
                <div class="content has-text-grey has-text-centered">
                  <p>
                    <b-icon
                      icon="emoticon-sad"
                      size="is-large"

                    />
                  </p>
                  <p>Nothing here.</p>
                </div>
              </section>
            </template>
          </b-table>
        </div>
      </div>

      <div class="columns">
        <div class="column has-text-right">
          <button
            class="is-primary button"
            @click="addProduct"
          >
            <fa-icon
              icon="plus"
              size="md"
            />

            <span class="ml1">Product</span>
          </button>
        </div>
      </div>
    </section>
    <!--  Free text 2  -->
    <section class="box mt1"
             v-if="invoice.templateNo===1">
      <b-field
        label="Free Text"
      >
        <b-input maxlength="200" type="textarea" v-model="invoice.freeTextTwo" />
      </b-field>

    </section>
    <!--  Total and invoice footer  -->
    <section class="mt1 mb3">
      <div class="columns">
        <div class="column is-8" >
          <b-field
            label="Footer"
            class="box">
            <b-input maxlength="200" type="textarea"  v-model="invoice.footer" />
          </b-field>
        </div>
        <div class="column">
          <div class="box pt2">
            <div class="columns" style="font-size: 1.2rem;">
              <div class="column">Discount :</div>
              <div class="column">
                <b-select placeholder="Discount" expanded>
                  <option>10%</option>
                  <option>20%</option>
                </b-select>
              </div>
            </div>
            <hr style="height: 2px;" class="has-background-primary">
            <div class="columns has-text-weight-bold" style="font-size: 1.9rem;">
              <div class="column ">Total  :</div>
              <div class="column has-text-right">Rs {{ invoice.total }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!--  Page fixed Footer  -->
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
            @click="designInvoiceContinue"
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
  const baseUrl = process.env.VUE_APP_API_SERVER;
  export default {
    name: "CreateInvoiceFrom",
    data(){
      return {

        invoice:{
          payerName:'',
          payerEmail:'',
          dueDate:'',
          invoiceNumber:'',
          products:[],
          footer:'',
          total:0,
          freeTextOne:'',
          freeTextTwo:'',
          templateNo:1
        },
        dropFiles: []
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

      this.addProduct();
      this.checkTemplateNumber();
      this.getNewInvoiceNumber();
    },
    methods:{
      getNewInvoiceNumber(){
        this.axiosInstance.get('/invoice/number/new')
          .then(response=>{
            console.log('get new invoice number response',response.data);
            this.$data.invoice.invoiceNumber = response.data.data;
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
      checkTemplateNumber(){
        this.$data.invoice.templateNo = parseInt(this.$route.query.template)
      },
      addProduct(){
        let product = {
          id:this.$data.invoice.products.length+1,
          name:'',
          description:'',
          price:0,
          quantity:0
        };
        this.$data.invoice.products.push(product);
      },
      calculateTotal(){
        let tempTotal = 0;
        this.$data.invoice.products.forEach(rec => {
          tempTotal = (rec.price*rec.quantity)+tempTotal
        });
        this.$data.invoice.total = tempTotal;
      },
      removeProduct(productNumber){
        console.log(productNumber)
        for (let i = 0; i < this.$data.invoice.products.length; i++) {
          if (this.$data.invoice.products[i].id === productNumber) {
            this.$data.invoice.products.splice(i, 1);
          }
        }
      },
      designInvoiceContinue(){
        this.axiosInstance.post('/invoice',this.$data.invoice)
          .then(response=>{
            console.log('Create invoice response --',response.data);
             this.$buefy.toast.open({
               duration: 3000,
               message: `Invoice Saved`,
               position: 'is-bottom',
               type: 'is-success'
             });
            this.$router.push('/dashboard/select-channel?invoiceId='+response.data.id)
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
