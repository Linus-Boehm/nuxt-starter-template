<template lang="pug">
  .card.p-4.signin-box.m-4
    h1 Sign In
    b-message(type="is-info" has-icon v-if="msgField=='activate'")
      p We have sent you an activation link to your email address {{email}} Please click on the link to activate your account
    form(name="signUpForm" @submit.prevent="signIn")
      b-field(label="Email" )
        b-input(type="email" v-model="email" name="email" data-vv-as="Email" placeholder="Email")
      b-field(label="Passwort" )
        b-input(type="password" v-model="password" name="password"  placeholder="Password" )
      .flex.pt-4
        button.button.is-link(type="submit").mr-4 Sign In
        .ml-auto.pt-2
          nuxt-link(:to="AuthRoutes.PASSWORT_FORGET") forgot Password?
      .flex.mt-1
        span.pr-1 No Account yet?
        nuxt-link(:to="AuthRoutes.SIGN_UP") Sign Up

</template>

<script>
import { AUTH_LOGIN_RESPONSE } from '@/types/auth/constants'
import { AUTH_LOGIN } from '@/types/auth/actions'
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'
export default {
  name: 'SignIn',
  components: { },
  mixins: [AuthHelperMixin],
  props: {
    redirectAfter: { default: false, type: Boolean },
    emailProp: { default: null, type: String },
    msgProp: { default: '', type: String }
  },
  data () {
    return {
      email: this.emailProp,
      password: null,
      messages: {},
      msgField: this.msgProp

    }
  },
  computed: {},
  mounted () {

  },
  methods: {
    async signIn () {
      this.messages = {}
      try {
        this.$nuxt.$loading.start()
        const { status } = await this.$store.dispatch(AUTH_LOGIN, { email: this.email, password: this.password })
        switch (status) {
          case AUTH_LOGIN_RESPONSE.SUCCESS:
            this.$notify({
              text: `Welcome Back ${this.getUsername}`,
              type: 'is-success',
              group: 'alerts'
            })
            break
          case AUTH_LOGIN_RESPONSE.CREDENTIALS_WRONG:
            this.$notify({
              text: `Wrong Credentials`,
              type: 'is-danger',
              group: 'alerts'
            })
        }
      } catch (e) {
        this.$nuxt.$loading.fail()
      } finally {
        this.$nuxt.$loading.finish()
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .signin-box {
    max-width: 600px;
  }
</style>
