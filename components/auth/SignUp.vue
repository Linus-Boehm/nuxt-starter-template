<template lang="pug">
  .card.p-4.signup-box.m-4
    form(name="signUpForm" @submit.prevent="signUp")
      b-field(label="Email"  )
        b-input(type="email" v-model="email" name="email"  placeholder="Email")
      b-field(label="Password")
        b-input(type="password" v-model="password" name="password" placeholder="Password" )
      b-field(label="Password Confirmation")
        b-input( v-model="confirm_password" name="password_confirmation" type="password"  placeholder="Repeat Password")
      b-field()
        b-checkbox(size="is-small" v-model="privacy" name="privacy" )
          span.pl-1 I agree to the
          a(target="_blank" :href="'/privacy'") Privacy Policy
      .flex
        button.button.is-link.mr-4(type="submit") Sign Up
        .flex
          span.ml-auto.pt-2 Have aleardy an account?&nbsp;
          nuxt-link(:to="AuthRoutes.SIGN_IN") Login
</template>

<script>
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'

export default {
  name: 'SignUp',
  mixins: [AuthHelperMixin],
  props: {},
  data () {
    return {
      email: null,
      password: null,
      confirm_password: null,
      privacy: null,
      messages: []
    }
  },
  computed: {},
  methods: {
    async signUp () {
      this.messages = []
      try {
        this.$nuxt.$loading.start()
        await this.register(this.email, this.password)
        const msg = 'Your registration was successful!'
        this.$notify({ text: msg, type: 'is-info', group: 'alerts' })
        this.$router.push({ path: this.AuthRoutes.CONFIRM_ACCOUNT, query: { email: this.email, msg: 'code_sent' } })
        this.$nuxt.$loading.finish()
      } catch (e) {
        const msg = 'This email is unfortunately already assigned!'
        this.$nuxt.$loading.fail()
        this.$notify({ text: msg, type: 'is-danger', group: 'alerts' })
      }
    }
  }
}

</script>

<style scoped lang="scss">
  .signup-box {
    max-width: 600px;
  }
</style>
