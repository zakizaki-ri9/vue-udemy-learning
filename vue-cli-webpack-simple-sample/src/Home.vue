<template>
  <div>
    <server-status v-for="_ in count" :key="_"/>
  </div>
</template>

<script>
import ServerStatus from './ServerStatus.vue'
export default {
  data() {
    return {
      count: 5
    }
  },
  components: {
    'server-status': ServerStatus
  }
}
</script>