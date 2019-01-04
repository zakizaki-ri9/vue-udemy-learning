<template>
  <div class="component">
    <h3>You may view the User Details here</h3>
    <p>Many Details</p>
    <p>User Name: {{ switchName() }}</p>
    <button @click="resetFunc()">Reset Name</button>
  </div>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      default: "Max"
    },
    resetFunc: {
      type: Function
    }
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
