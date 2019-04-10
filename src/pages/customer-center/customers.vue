<template>
  <div class="customers row">

    <!-- desktop :: add customer -->
    <div class="col-md-8 gt-md">
      <div class="row justify-center items-center desktop-add-customer-container">
        <add-customer class="col-md-10 col-lg-10 col-xl-8"/>
      </div>
    </div>
    <!-- /desktop :: add customer -->


    <!-- list customers :: all screen -->
    <div class="customers-list col-xs-12 col-lg-4">
      <list-customers/>
    </div>
    <!-- /list customers :: all screen -->


    <!-- mobile :: add customer -->
    <q-btn class="add-new-customer lt-lg" @click="$modal.show('add-new-customer')" round>
      <i class="material-icons icon">add</i>
    </q-btn>

    <modal name="add-new-customer" :adaptive="true" width="100%" height="100%">
      <div class="add-new-customer-dialog">
        <div class="row justify-center items-center mobile-add-customer-container">
          <add-customer class="col-xs-9"/>
        </div>

        <q-btn
          class="close-dialog-btn"
          flat round
          size="xs"
          @click="$modal.hide('add-new-customer')"
        >
          <i class="material-icons">clear</i>
        </q-btn>
      </div>
    </modal>
    <!-- mobile :: add customer -->

  </div>
</template>

<script>
  import addCustomer from './add-customer'
  import listCustomers from './list-customers'

  export default {
    data () {
      return {
        isAddCustomerDialogOpen: false
      }
    },
    components: {
      'add-customer': addCustomer,
      'list-customers': listCustomers
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../src/scss/layouts/pages/customers";
</style>
