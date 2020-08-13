<template>
  <section class="section">
    <div class="box">
      List Invoice
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
          response: {},
          billerList: [],
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
          console.log('token',localStorage.getItem('token'));
          axios.get(baseUrl+'/biller',{
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
          })
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
