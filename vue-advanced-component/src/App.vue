<template lang="pug">
  .container
    .row
      .col-xs-12
        app-quote(quote='A wonderful quote!')
          h2(slot="title")
            | {{ quoteTitle }}
          p(slot="content")
            | A wonderful Quote
</template>

<script>
import Quote from './components/Quote.vue'

export default {
  data: function() {
    return {
      quoteTitle: 'The Quote'
    }
  },
  components: {
    appQuote: Quote
  }
}
</script>

<style lang="scss">
</style>
