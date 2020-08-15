<template>
  <section class="section">
    <section class="box">
      <p class="subtitle has-text-primary has-text-weight-bold ">
        Payer Info
      </p>
      <div class="columns">
        <div class="column is-4">
          <b-field label="Payer Name">
            <b-input placeholder="Payer Name" />
          </b-field>

          <b-field label="Payer Email">
            <b-input
              placeholder="Payer Email"
              type="email"
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

    <section class="box mt1">
      <p class="subtitle has-text-primary has-text-weight-bold ">
        Products
      </p>

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
                />
              </b-table-column>

              <b-table-column
                field="Total"
                label="Total"
                width="200"
                numeric
              >
                {{ props.row.quantity * props.row.price }}
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

    <section
      style="
             position: fixed;
             bottom: 0;
             left: 0;
             width: 100%;
     ">
      <div class="columns">
        <div class="column is-2"></div>
        <div class="column has-background-dark pb2 pr2 has-text-right" style="margin-left: -0.75rem !important;">
          <button
            class="is-primary button mt1 ml2"
            @click="addProduct"
          >
            Continue
          </button>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    name: "CreateInvoiceFrom",
    data(){
      return {
        invoice:{
          products:[]
        },
        dropFiles: []
      }
    },
    mounted() {
      this.addProduct();
    },
    methods:{
      addProduct(){
        let product = {
          name:'Nokia',
          description:'Description of the product',
          price:0,
          quantity:0
        };
        this.$data.invoice.products.push(product);
      }
    }
  }
</script>

<style scoped>

</style>
