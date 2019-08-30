<template lang="pug">
  .card.p-4.signup-box.m-4
    h1 Forgotten password
    form(name="signUpForm" @submit.prevent="requestReset()")
      b-field(label="Email")
        b-input(type="email" v-model="email" name="email" placeholder="Email")
      .flex
        b-button.button.is-link(@click="requestReset()" type="is-link") Request reset
        .ml-auto
          nuxt-link(:to="AuthRoutes.SIGN_IN") Sign In

</template>

<script>
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'

export default {
  name: 'ForgotPassword',
  mixins: [AuthHelperMixin],
  props: {
    emailProp: { default: null },
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

    requestReset () {
      this.isLoading = true
      // TODO basic pw request
    }

  }
}
</script>

<style scoped lang="scss">
  .signup-box {
    max-width: 600px;
  }
</style>
