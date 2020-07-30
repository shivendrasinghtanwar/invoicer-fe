<template>
  <div>
    <div class="container">
      <div class="notification">
        <a @click="getAllBillers">Click here</a> to get all billers
<!--        <b-button type="is-primary" @click="getAllBillers" >Get</b-button>-->
      </div>
    </div>
    <section class="section">
      <b-table :data="this.billerList" :columns="columns"></b-table>
    </section>
    <section class="section"> 
          <vue-json-pretty
            :path="'res'"
            :data="this.billerList">
          </vue-json-pretty>
    </section>
  </div>
</template>

<script>
  import axios from 'axios';

  import VueJsonPretty from 'vue-json-pretty';
  const baseUrl = process.env.VUE_APP_API_SERVER;
  export default {
    name: 'DisplayJson',
    components: {
      VueJsonPretty
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
