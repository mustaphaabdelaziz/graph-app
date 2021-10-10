<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Graphs</router-link>
      <router-link to="/about">About</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-color: #42b983;
  margin-bottom: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  a {
    font-weight: bold;
    color: #2c3e50;
    margin: 10px;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
