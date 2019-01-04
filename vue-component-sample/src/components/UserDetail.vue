<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <p>User Age: {{ userAge }}</p>
    <button @click="resetFunc()">Reset Name and Age</button>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "Max"
    },
    resetFunc: Function,
    userAge: Number
  },
  methods: {
    /**
     * userNameを逆転する
     */
    switchName() {
      return this.userName.split("").reverse().join("")
    }
  },
}
</script>

<style scoped>
div {
  background-color: lightcoral;
}
</style>
