<template lang="pug">
  .card.p-4.signup-box.m-4
    h1 Confirm Account
    b-message(type="is-info" has-icon v-if="msgField=='code_sent'")
      p We have sent you a code to your email {{email}}&nbsp;
    b-message(type="is-info" has-icon v-if="msgField=='not_confirmed'")
      p Your email address {{email}} has not yet been confirmed, please enter the code from the email.
    form(name="signUpForm" @submit.prevent="confirm")
      b-field(label="Email")
        b-input(type="email" v-model="email" name="email" placeholder="Email")
      b-field(label="Code" )
        b-input(type="text" v-model="code" name="code" placeholder="Code" )

      .flex
        b-button(type="is-link" @click="confirm") Activate account
        .ml-auto
          a(@click="resendCode()") Request new activation email
    FullPageSpinner(:loading="isLoading")

</template>

<script>
export default {
  name: 'ConfirmCode',
  props: {
    emailProp: null,
    msgProp: { default: false }
  },
  data () {
    return {
      email: this.emailProp,
      code: null,
      msgField: this.msgProp,
      isLoading: false
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    resendCode () {
      // TODO Resend Code
    },
    confirm () {
      // TODO Confirm Account
    }
  }
}
</script>

<style scoped lang="scss">
  .signup-box {
    max-width: 600px;
  }
</style>
