<template lang="pug">
  .content-wrapper.flex.flex-col
    MainMenu
    no-ssr
      notifications(group="alerts" position="bottom right")
    .flex.flex-col
      nuxt
    .footer
</template>
<style>
  html, body{
    @apply font-sans;
    scroll-behavior: smooth;
  }
  html, body, .content-wrapper, #__layout, #__nuxt {
    height: 100%;
  }
</style>
<style lang="scss" scoped>

.content-wrapper {
}

.footer {
  flex-shrink: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
<script>
import MainMenu from '@/components/layouts/MainMenu'
export default {
  components: { MainMenu }
}
</script>
