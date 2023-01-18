<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Error Page Test</router-link>
    </nav>
    <router-view/>
  </div>
</template>

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
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

button{
  width: 80px;
  margin: 0 10px;
  line-height: 35px;
  color: #2c3e50;
  background: #dee6ee;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: background 0.4s, color 0.3s
}
button:hover{
  color: #fff;
  background: #42b983;
}
</style>
