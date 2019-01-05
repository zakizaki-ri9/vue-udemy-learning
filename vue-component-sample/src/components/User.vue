<template>
  <div class="component">
    <h1>The User Component</h1>
    <p>I'm an awesome User!</p>
    <button @click="changeName">Change User Name</button>
    <p>Name is {{ name }}</p>
    <p>Age is {{ age }}</p>
    <hr>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <app-user-detail
          :user-name="name"
          :reset-func="resetData"
          :user-age="age"></app-user-detail>
        <!-- <app-user-detail></app-user-detail> -->
      </div>
      <div class="col-xs-12 col-sm-6">
        <app-user-edit
          :user-age="age"
          @ageEdited="age = $event"></app-user-edit>
      </div>
    </div>
  </div>
</template>

<script>
import UserDetail from './UserDetail.vue'
import UserEdit from './UserEdit.vue'
import { eventBus } from '../main'

export default {
  data: function() {
    return {
      name: 'Max',
      age: 27
    }
  },
  methods: {
    changeName() {
      this.name = "John"
    },
    resetData() {
      this.name = "Max"
      this.age = 27
      eventBus.changeAgeToEdit(this.age)
    }
  },
  components: {
    appUserDetail: UserDetail,
    appUserEdit: UserEdit
  }
}
</script>

<style scoped>
div {
  background-color: lightblue;
}
</style>
