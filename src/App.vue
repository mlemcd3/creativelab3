<!-- <template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
    <ticTacToe/>
  </div>
</template> -->


<template>
  <div id="app">
    <!-- <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link> -->
    <h1> Tic Tac Toe </h1>
    <tic-tac-toe />
    <div class='footer'>
    <p><a href="https://github.com/mlemcd3/creativeProject3">GitHub</a></P>
  </div>
  </div>
</template>

<script>
import ticTacToe from "./components/Game.vue";

export default{
  components:{
    ticTacToe
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
#app {
  display: grid;
  place-items: center;
  position: relative;
  min-height: 77vh;
  background-color: #e0f2f9;
  }
  .footer {
position: fixed;
left: 0;
bottom: 0;
width: 100%;
  background-color: #eaeaea;
color: white;
text-align: center;
}

</style>
