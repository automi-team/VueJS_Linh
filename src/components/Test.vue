<template>
  <div id="test">
    This is the test app Vue
    <input type="text" v-model="name"/>
    <div> {{ name }} </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: "some name"
      }
  }
}
</script>

<style scoped>

</style>
