<template>
  <section class="section has-background-white-ter">
    <div class="container is-fluid box">
      <b-table
        :data="billerList"
        :striped="true"
        :narrowed="false"
        :hoverable="true"
      >

        <template slot-scope="props">
          <b-table-column field="id" label="ID" sortable>
            {{ props.row.id }}
          </b-table-column>

          <b-table-column field="first_name" label="First Name" >
            {{ props.row.name.first }}
          </b-table-column>

          <b-table-column field="last_name" label="Last Name" >
            {{ props.row.name.last }}
          </b-table-column>

          <b-table-column field="email" label="Email" >
            {{ props.row.email }}
          </b-table-column>

          <b-table-column label="Address" width="500">
                        {{ props.row.address.street }} {{ props.row.address.apartmentNumber }}, {{ props.row.address.city }} {{ props.row.address.postalCode }}
          </b-table-column>
          <b-table-column field="edit" label="Edit">
            <fa-icon icon="edit" size="lg" />

          </b-table-column>
          <b-table-column field="delete" label="Delete">
            <fa-icon icon="trash" size="lg" />
          </b-table-column>
        </template>
      </b-table>
    </div>
  </section>
</template>

<script>
  import axios from 'axios';
  import { library } from '@fortawesome/fontawesome-svg-core'
  import { faEdit,faTrash } from '@fortawesome/free-solid-svg-icons'

  library.add(faEdit,faTrash)
  const baseUrl = process.env.VUE_APP_API_SERVER;
  export default {
    name: "BillerList",
    components: {
    },
    data() {
      return {
        response:{},
        billerList:[],
        columns: [
          {
            field: 'id',
            label: 'ID',
          },
          {
            field: 'name',
            label: 'Biller Name',
          },
          {
            field: 'email',
            label: 'E-Mail'
          }
        ]
      }
    },
    mounted() {
      this.getAllBillers();
    },
    methods:{


      getAllBillers(){
        axios.get(baseUrl+'/biller')
          .then(response =>{
            // console.log(this.$data.billerList);

            this.$data.billerList = response.data;
            console.log(response);
            // console.log(this.$data.billerList);
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
      }
    }
  }
</script>

<style scoped>

</style>
