<template lang="pug">
  nav.navbar.shadow-md(role='navigation', aria-label='main navigation')
    .navbar-brand
      nuxt-link.navbar-item(:to="Routes.STARTPAGE")
        Logo
      a.navbar-burger.burger(role='button', aria-label='menu', aria-expanded='false', data-target='navbarBasicExample')
        span(aria-hidden='true')
        span(aria-hidden='true')
        span(aria-hidden='true')
    #navbarBasicExample.navbar-menu
      .navbar-start()
        nuxt-link.navbar-item(:to="Routes.STARTPAGE") Startpage
        nuxt-link.navbar-item(:to="'/secret'" v-if="isAuthenticated") Secret site
      .navbar-end
        MenuUserDropdown

</template>

<script>

import MenuUserDropdown from '@/components/layouts/MenuUserDropdown'
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'
import { STARTPAGE } from '@/routes'

export default {
  name: 'MainMenu',
  components: { MenuUserDropdown },
  mixins: [AuthHelperMixin],
  data () {
    return {
      navbarActive: false,
      scrolledOver: false,
      isMobile: false,
      // Add Paths where nav should always be shrinked/transparent
      excludedTransparentPaths: [],
      Routes: {
        STARTPAGE
      }
    }
  },
  computed: {
    isTransparent () {
      return !this.navbarActive && this.isExcluded && !this.isShrinked && !this.isMobile
    },
    isShrinked () {
      return this.isExcluded || this.scrolledOver
    },
    isExcluded () {
      return this.excludedTransparentPaths.includes(this.$route.path)
    },
    // Logo Color switcher
    logoColor () {
      return this.isTransparent ? '#FFFFFF' : '#434770'
    }
  }

}
</script>

<style scoped>

  .logo {
    height: 40px;
    max-height: 40px;
  }
</style>
