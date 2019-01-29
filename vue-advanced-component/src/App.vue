<template lang="pug">
  .container
    .row
      .col-xs-12
        app-quote(quote='A wonderful quote!')
          h2 The Quote
          p A wonderful Quote
</template>

<script>
import Quote from './components/Quote.vue'

export default {
  components: {
    appQuote: Quote
  }
}
</script>

<style lang="scss">
</style>
