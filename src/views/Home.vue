<template>
  <div class="home">
    <tic-tac-toe />
  </div>
</template>

<script>
import ticTacToe from "../components/Game.vue";

export default{
  name: 'Home',
  components:{
    ticTacToe
  },
}
</script>
