<template>
  <div>
    <h1>Vuex</h1>
    <p>Store v1 => {{ $store.state.name }}</p>
    <p>Store v2 => {{ this.name }}</p>
    <!-- this button will change name -->
    <button @click="setName('new name')">Set new name</button>
    <button @click="updateProfile">Action update</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["name"]), // write array of var we want to get from store
  },
  methods: {
    ...mapMutations(["setName"]), //write array of var we want to use
    ...mapActions(["updateProfile"]),
  },
};
</script>

<style></style>
