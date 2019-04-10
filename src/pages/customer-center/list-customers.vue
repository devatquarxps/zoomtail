<template>
  <div class="list-customers">

    <p class="title">Existing customer's list</p>

    <!-- CUSTOMERS :: LIST -->
    <div
      v-for="(customer, index)  in CUSTOMERS"
      :key="index"
      class="loop"
    >

      <div
        class="_left"
      >

        <i
          class="material-icons menu-icon"
        >
          person
        </i>


        <div>
          <div
            class="text"
          >

            {{customer.firstName.val}} {{customer.lastName.val}}
          </div>

          <div
            class="sub-text"
          >
            {{customer.dob.val}}
          </div>
        </div>

      </div>


      <div
        class="_right"
      >

        <i
          @click="delCustomer({ customer, index })"
          class="material-icons del-icon"
        >
          delete
        </i>

      </div>
    </div>
    <!-- /CUSTOMERS :: LIST -->

  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'CUSTOMERS'
      ])
    },
    methods: {
      delCustomer ({ customer, index }) {
        let result = confirm(`Want to delete ${customer.firstName.val} ?`);
        if (result) {
          //Logic to delete the item
          this.$store.dispatch('DEL_CUSTOMER', { customer, index })
        }
      }
    }
  }
</script>

<style lang="scss">
  @import "../../scss/layouts/pages/list-customers";
</style>
