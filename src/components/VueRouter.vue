<template>
  <div>
    <h1>Vue Router</h1>
    <h2>This is for router link</h2>
    <router-link to="/"> Home </router-link>
    <router-link to="/page-one"> Page One </router-link>
    <router-link to="/new-page"> New Page </router-link>
    <router-view></router-view>
    <h2>This is router with param</h2>
    <router-link to="/page-one/1"> id = 1 </router-link>
    <router-link to="/page-one/123"> id = 123 </router-link>
    <p>This is the id {{ $route.params.id }}</p>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
