<template>
  <div class="add-customer">

    <p class="title">Add a new customer</p>


    <!-- First name -->
    <div
      class="app-text-field"
    >
      <img
        class="icon"
        src="https://img.icons8.com/metro/50/000000/name.png"
      >

      <input
        v-model="customer.firstName.val"
        class="text-field"
        placeholder="First name"
        type="text"
      >
    </div>
    <!-- /First name -->


    <!-- Last name -->
    <div
      class="app-text-field"
    >
      <img
        class="icon"
        src="https://img.icons8.com/metro/50/000000/name.png"
      >

      <input
        v-model="customer.lastName.val"
        class="text-field"
        placeholder="Last Name"
        type="text"
      >
    </div>
    <!-- /Last name -->


    <!-- DOB -->
    <div class="app-text-field">
      <img
        class="icon"
        src="https://img.icons8.com/material/50/000000/calendar-11.png"
      >

      <input
        v-model="customer.dob.val"
        class="text-field"
        placeholder="Last Name"
        type="date"
      >
    </div>
    <!-- /DOB -->


    <!-- Add customer -->
    <div
      class="app-btn"
    >

      <q-btn
        @click="addNewCustomer()"
        flat
        class="btn"
      >
        Add
      </q-btn>

    </div>
    <!-- /Add customer -->

  </div>
</template>

<script>
  export default {
    data () {
      return {
        customer: {
          firstName: { val: '', label: 'First name' },
          lastName: { val: '', label: 'Last name' },
          dob: { val: '', label: 'Date of birth' }
        }
      }
    },
    methods: {
      addNewCustomer () {
        this.$store.dispatch('ADD_CUSTOMER', { customer: this.customer, vm: this })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../src/scss/layouts/pages/add-customer";
</style>
