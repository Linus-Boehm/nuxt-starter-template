<template lang="pug">
  .navbar-item.mr-4(:class="{'has-dropdown is-hoverable':isAuthenticated}")
    .buttons(v-if="!isAuthenticated")
      nuxt-link.button.is-primary(:to="AuthRoutes.SIGN_UP")
        strong Sign Up
      nuxt-link.button.is-lightLog(:to="AuthRoutes.SIGN_IN") Login

    div(v-else)
      a.h-full.navbar-link Hello {{getUsername}}
      .navbar-dropdown
        nuxt-link.navbar-item(:to="'/admin'" v-if="isAdmin") Secret Admin Page
        a.navbar-item(@click="logout()") Logout

</template>

<script>

import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'
export default {
  name: 'MenuUserDropdown',
  mixins: [AuthHelperMixin],
  props: {
    adminLayout: { default: false, type: Boolean }
  },
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {}
}
</script>

<style scoped lang="scss">

</style>
