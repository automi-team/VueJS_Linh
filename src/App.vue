<template>
  <div id="app">
    <h1> Summary </h1>
    <exemple-1 /> <hr>
    <ButtonShow /> <hr>
    <TodoList :sendTask="sendData" /> <hr>
    <TagSelector /> <hr>
    <FilterExemple /> <hr>
    <VuexExemple /> <hr>
    <VueRouter /> <hr>
    <h1> Fetch API </h1>
    <FetchAPI />
  </div>
</template>

<script>
//import Test from './components/Test';
import ButtonShow from "./components/ButtonShow.vue";
import Exemple1 from "./components/Exemple1.vue";
import FetchAPI from './components/FetchAPI.vue';
import FilterExemple from './components/FilterExemple.vue';
import TagSelector from './components/TagSelector.vue';
import TodoList from "./components/TodoList.vue";
import VueRouter from './components/VueRouter.vue';
import VuexExemple from './components/VuexExemple.vue';

export default {
  name: "App",
  components: {
    //shortcut for Menu: Menu
    ButtonShow,
    Exemple1,
    TodoList,
    TagSelector,
    FilterExemple,
    VuexExemple,
    VueRouter,
    FetchAPI,
  },
  data() {
    return{
      sendData: {content: "Data from parent sent to child", send: true},
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
