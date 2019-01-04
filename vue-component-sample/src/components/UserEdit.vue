<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="editAge">Edit Age</button>
    <button @click="editAgeToChild">Edit Age To Child</button>
  </div>
</template>

<script>
import { eventBus } from '../main'

export default {
  props: {
    userAge: Number
  },
  methods: {
    editAge() {
      this.userAge = 20
      this.$emit('ageEdited', this.userAge)
    },
    editAgeToChild() {
      this.userAge = 30
      eventBus.$emit('resetDataCustom', { age: this.userAge })
    }
  },
}
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
