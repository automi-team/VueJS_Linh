<template>
  <div>
    <div v-if="loading && loading !== 'error'">Loading...</div>
        <ul v-else>
            <li v-for="(todo,index) in todos" :key="index">{{ todo.title }}</li>
        </ul>
        <div v-if="loading === 'error'">Error</div>
  </div>
</template>

<script>
export default {
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => {
        this.todos = json;
        this.loading = false;
      })
    //   .catch((error) => (this.loading = "error"));
  },

  data: function() {
    return {
      loading: true,
      todos: [],
    };
  },
};
</script>
