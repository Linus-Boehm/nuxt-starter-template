<template lang="pug">
  button.button.is-link(@click="logout()") Logout

</template>

<script>

import AuthHelperMixin from '@/mixins/store-helpers/AuthHelperMixin'

export default {
  name: 'LogOutButton',
  mixins: [AuthHelperMixin],
  props: {},
  data () {
    return {
    }
  },
  computed: {},
  methods: {

  }
}
</script>

<style scoped lang="scss">

</style>
