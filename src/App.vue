<template>
  <div id="app">
    <APIIndicator/>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar';
import APIIndicator from './components/container/APIIndicator/APIIndicator';

export default {
  name: 'app',
  components: {
    NavBar,
    APIIndicator,
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
  -webkit-margin-before: 0;
  -webkit-margin-after: 0;
}
h1, h2, h3, h4, h5, h6{
  margin: 0;
  
}
</style>
