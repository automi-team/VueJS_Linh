<template>
  <div id="ex1">
    <input type="text" v-model="name"/>
    <input type="checkbox" v-model="accept"> I agree {{accept}}
    <div> {{ name }} </div>
  </div>
</template>

<script>
export default {
  data() {
      return {
          name: "some name",
          accept: true
      }
  }
}
</script>

<style scoped>

</style>
