<template lang="pug">
  .section
    .container
      .content
        sign-in(v-if="!isAuthenticated")
        LogOutButton(v-else)
</template>

<script>
import SignIn from '@/components/auth/SignIn'
import LogOutButton from '@/components/auth/LogOutButton'
import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'
export default {
  name: 'Login',
  components: { LogOutButton, SignIn },
  mixins: [AuthHelperMixin],

  props: {},
  data () {
    return {
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
