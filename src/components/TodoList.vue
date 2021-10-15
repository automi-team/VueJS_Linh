<template>
  <div id="todolist">
    <h2> {{  sendTask }} </h2>
    <input type="text" v-model="newTask" />
    <button @click="addTask()">Add</button>
    <div v-for="(task, index) in tasks" :key="index">
      <input type="checkbox" v-model="task.done" />
      <span :class="{ done: task.done }"> {{ task.todo }} </span>
    </div>
  </div>
</template>

<script>
export default {
  // this way can be use but with diferrence type => error
  // props: [
  //   'sendTask', 
  // ],
  // So prefer version 2, instead of send array [], we send object {}
  props: {
    sendTask: {
      type: Object,
      default: function() { return {} } //must be a function
    }
  },
  data() {
    return {
      newTask: "",
      tasks: [],
    };
  },
  // mounted: {
  //   //call API
  // },
  methods: {
    addTask: function() {
      this.tasks.push({ //this is reference of tasks
        todo: this.newTask, 
        done: false 
        });
    }
  },
  watch: { //take the name of data
    newTask: function(newValue, oldValue) {
      console.log(oldValue); // show old value before change
      console.log(newValue); // show new value after change
    }
  }
};
</script>

<style scoped>
.done {
  text-decoration: line-through;
}
</style>
