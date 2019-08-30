<template lang="pug">
  .section
    .container.flex.flex-col
      .flex.justify-center.w-full
        Logo
      h1.title Nuxt Starter Template
      h2.subtitle Because wasting time is the biggest waste of all time.
      h4.author.text-xl.font-bold Author: Linus Boehm
      .links.buttons
        a.button.is-primary(href="https://linusboehm.de/" target="_blank") Website
        a.button.is-info(href="https://github.com/Linus-Boehm/nuxt-starter-template" target="_blank") View on Github
        a.button.is-success(href="https://github.com/nuxt/nuxt.js" target="_blank") Nuxt Project

</template>

<script>

import Logo from '@/components/layouts/Logo'

export default {
  components: {
    Logo
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  @aplly text-blue-800
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  letter-spacing: 1px;
}

.subtitle {
@aplly text-blue-700
  font-weight: 300;
  font-size: 42px;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
