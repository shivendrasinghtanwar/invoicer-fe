<template>
  <section class="section">
    <div class="columns box">
      <div class="column">
        <div class="columns">
          <div class="column is-4">

            <b-field label="Payer Name">
              <b-input placeholder="Payer Name">
              </b-input>
            </b-field>

            <b-field label="Payer Email">
              <b-input placeholder="Payer Email"
                       type="email">
              </b-input>
            </b-field>
          </div>
          <div class="column">
            <b-field label="Due Date">
              <b-datepicker
                :show-week-number="false"
                placeholder="Due Date"
                icon="calendar-today"
                trap-focus>
              </b-datepicker>
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
                          size="is-large">
                        </b-icon>
                      </p>
                      <p>Choose logo for Invoice</p>
                    </div>
                  </section>
                </b-upload>
              </b-field>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: "CreateInvoiceFrom",
    data(){
      return {
        dropFiles: []
      }
    }
  }
</script>

<style scoped>

</style>
