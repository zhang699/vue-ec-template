<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar';

export default {
  name: 'app',
  components: {
    NavBar,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/** {
  border: 1px solid black;
}*/
body {
  margin: 0;
  overflow-x: hidden;
}

ol, ul {
  -webkit-padding-start: 0;
}
h1, h2, h3, h4{
  margin: 0;
  
}
</style>
