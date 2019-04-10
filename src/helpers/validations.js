import { Notify } from 'quasar'

export const stringValidation = ({ val, Vue, config }) => {
  console.log({ stringValidation: { val, Vue, config } })

  let re = /^$/
  if (re.test(val)) {
    console.log('val fail')
    console.log({ notify: Vue.$notify })

    // fail
    Notify.create(config.text)
    return false
  }
  else {
    console.log('val success')

    // success
    return true
  }
}
