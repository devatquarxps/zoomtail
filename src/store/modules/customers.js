import { stringValidation } from '../../helpers/validations'
import { Notify } from 'quasar'

const state = {
  CUSTOMERS: []
}

const getters = {
  CUSTOMERS: state => state.CUSTOMERS
}

const mutations = {
  ADD_CUSTOMER (state, { customer }) {
    state.CUSTOMERS.unshift(customer)
  },

  DEL_CUSTOMER (state, { index }) {
    state.CUSTOMERS.splice(index, 1)
  }
}

const actions = {
  ADD_CUSTOMER ({ commit }, { customer, vm }) {
    console.log({ ADD_CUSTOMER: { customer, vm } })

    // validation
    for (let key in customer) {
      let valRes = stringValidation({
          val: customer[key].val,
          Vue: vm,
          config: {
            text: `Validation error ! ${customer[key].label} cannot be empty !`,
            type: 'warn'
          }
        })

      if (!valRes) {
        return
      }
    }

    // if req, connect to DB via REST.

    commit('ADD_CUSTOMER', { customer })

    // clear
    vm.customer = {
      firstName: { val: '', label: 'First name' },
      lastName: { val: '', label: 'Last name' },
      dob: { val: '', label: 'Date of birth' }
    }
    vm.$modal.hide('add-new-customer')
  },

  DEL_CUSTOMER ({ commit}, { customer, index }) {
    console.log({ DEL_CUSTOMER: { customer, index } })

    commit('DEL_CUSTOMER', { index })
    Notify.create({ message: `Successfully deleted ${customer.firstName.val} from customer's list !`, type: 'positive' })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
