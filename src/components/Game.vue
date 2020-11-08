<template>
  <div class="tictactoe-board">
      <div v-for="(n, i) in 3" v-bind:key="n">
        <div v-for="(n, j) in 3" v-bind:key="n">
          <cell :move="board[i][j]" @click="playerMove(i,j)"></cell>
        </div>
      </div>
    <div v-if="gameOver">{{player1}} help</div>
  </div>
</template>
<script>
  export default {
    data() { return {
      player1: true,
      gameOver: false,
      board: [
          ['', '', ''],
          ['', '', ''],
          ['', '', '']
        ],
      movesLeft: 9
    } },
    methods: {
      playerMove(i,j) {
        if(this.board[i][j] != "" || this.gameOver) return;
        this.board[i][j] = this.Tocken();
        this.$forceUpdate();
        this.movesLeft = this.movesLeft - 1;
        if(this.winner("X") || this.winner("O")){
          this.gameOver = true;
        }
      },
      currentPlayer(){
        if(this.player1){
          return "X";
        }
        else return "O";
      }
      GameOver(){
        if(this.movesLeft == 0){
          this.gameOver = true;
        }
      },
      Tocken(){
        if(this.player1){
          this.player1 = !this.player1;
          return "X";
        }
        else{
          this.player1 = !this.player1;
          return "O";
        }
      },
      possibleMoves(){
        return this.movesLeft;
      },
      winner(player){
        //across
        for(var i = 0; i < 3; i++){
          if((this.board[0][i] == player) && (this.board[1][i] == player) && (this.board[2][i] == player)){
            return true;
          }
        }
        //down
        for(i = 0; i < 3; i++){
          if((this.board[i][0] == player) && (this.board[i][1] == player) && (this.board[i][2] == player)){
            return true;
          }
        }

        //vertical left to right
          if((this.board[0][0] == player) && (this.board[1][1] == player) && (this.board[2][2] == player)){
            return true;
          }

        //vertical right to left
          if((this.board[2][0] == player) && (this.board[1][1] == player) && (this.board[0][2] == player)){
            return true;
          }

          return false;
      }
    },
  }
</script>
<style>
  .tictactoe-board {
    display: flex;
    flex-wrap: wrap;
    width: 204px;
    height: 204px;
  }
</style>
