<template>
  <div class="component">
    <h3>You may edit the User here</h3>
    <p>Edit me!</p>
    <p>User Age: {{ age }}</p>
    <button @click="editAge">Edit Age</button>
    <button @click="editAgeToChild">Edit Age To Child</button>
  </div>
</template>

<script>
import { eventBus } from "../main";

export default {
  props: {
    userAge: Number
  },
  data() {
    return {
      age: this.userAge
    };
  },
  methods: {
    editAge() {
      this.age = 20;
      this.$emit("ageEdited", this.age);
      eventBus.changeAge(this.age);
    },
    editAgeToChild() {
      this.age = 30;
      //eventBus.$emit('resetDataCustom', { age: this.userAge })
      eventBus.changeAge(this.age);
    }
  },
  created() {
    eventBus.$on("changeAgeToEdit", age => {
      this.age = age;
    });
  }
};
</script>

<style scoped>
div {
  background-color: lightgreen;
}
</style>
