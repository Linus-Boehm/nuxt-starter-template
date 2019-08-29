import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import de from 'vee-validate/dist/locale/de'

Vue.use(VeeValidate)
Validator.localize('de', de)
VeeValidate.Validator.extend('verify_password', {
  getMessage: field => `The password must contain at least: 1 uppercase letter, 1 lowercase letter and 1 number`,
  validate: (value) => {
    const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})')
    return strongRegex.test(value)
  }
})
