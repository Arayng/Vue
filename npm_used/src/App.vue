<template>
   <div id="app">
    <h2>라우터(router) 사용</h2>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/main">Main Page</router-link>
      <router-link to="/sub">Sub Page</router-link>
    </nav>
    <hr class="line">
    <img src="./assets/logo.png" alt="">
    <router-view/>
  </div>
</template>

<script>
  // import router from './router.js'
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  text-decoration: none;
  color: #2c3e50;
  padding: 10px;
}

nav a.router-link-exact-active {
  color: #f7232f;
}
</style>
