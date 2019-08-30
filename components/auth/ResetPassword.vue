<template lang="pug">
  .card.p-4.signup-box.m-4
    h1 Reset password
    b-message(type="is-info" has-icon v-if="msgField=='code_sent'")
      p We have sent you an email to {{email}} with instructions to reset your password.&nbsp;
    form(name="signUpForm" @submit.prevent="reset")
      b-field(label="Email" )
        b-input(type="email" v-model="email" name="email"  placeholder="Email")
      b-field(label="Code" )
        b-input(type="text" v-model="code" name="code" placeholder="Code" autocomplete="new-password")
      b-field(label="New Password")
        b-input(type="password" v-model="password" name="password" placeholder="Password" )
      b-field(label="New password confirmation")
        b-input( v-model="confirm_password" name="password_confirmation" type="password" placeholder="repeat new Password")

      .flex
        b-button(@click="reset()" type="is-primary" :loading="isLoading") Request new password


</template>

<script>
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'

export default {
  name: 'ResetPassword',
  mixins: [AuthHelperMixin],
  props: {
    emailProp: null,
    msgProp: { default: null }
  },
  data () {
    return {
      email: this.emailProp,
      code: null,
      msgField: this.msgProp,
      isLoading: false,
      password: null,
      confirm_password: null
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    /* async */ reset () {
      try {
        this.$nuxt.$loading.start()
        this.isLoading = true
        // TODO request new password
        this.$notify({ text: 'Your password has been successfully changed, you can log in now.', type: 'is-success', group: 'alerts' })
        this.$router.push({ path: this.AuthRoutes.SIGN_IN, query: { confirmed: true } })
      } catch (e) {
        this.$notify({ text: e.message, type: 'is-danger', group: 'alerts' })
      } finally {
        this.isLoading = false
        this.$nuxt.$loading.finish()
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
