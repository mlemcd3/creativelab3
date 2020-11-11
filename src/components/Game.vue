<template>
<div class="tictactoe-board">
  <div v-for="(n, i) in 3" v-bind:key="n">
    <div v-for="(n, j) in 3" v-bind:key="n">
      <cell :move="board[i][j]" @click="playerMove(i,j)"></cell>
    </div>
  </div>
  <button @click="NewGame">New Game</button>
  <button @click="comp = true">1 player</button>
  <button @click="comp = false">2 players</button>
  <div v-if="gameOver"> {{ currentPlayer() }} Won!</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      comp: false,
      player1: true,
      gameOver: false,
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
      ],
      movesLeft: 9
    }
  },
  methods: {
    NewGame(){
      this.player1 = true;
      this.gameOver = false;
      for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
          this.board[i][j] = "";
        }
      }
      this.movesLeft = 9;
      this.$forceUpdate();
    },
    playerMove(i, j) {
      if (this.board[i][j] != "" || this.gameOver) return;
      if(!this.comp){
        this.board[i][j] = this.Tocken();
        this.movesLeft = this.movesLeft - 1;
        this.$forceUpdate();
        if (this.winner("X", this.board) || this.winner("O", this.board)) {
          this.gameOver = true;
        }
      }
      else{
        this.player1 = true;
        this.board[i][j] = "X";
        this.$forceUpdate()
        if (this.winner("X", this.board)) {
          this.gameOver = true;
          return;
        }
        this.movesLeft = this.movesLeft - 1;
        if(this.movesLeft != 0){
          this.player1 = false;
          this.compMove();
          this.movesLeft = this.movesLeft - 1;
          if (this.winner("O", this.board)) {
            this.gameOver = true;
          }
        }
        this.$forceUpdate();
      }
    },
    compMove(){
      if(this.movesLeft == 0) return;
      for(var i = 0; i < 3; i ++){
        for(var j = 0; j < 3; j ++){
          if(this.board[i][j] == ""){
            this.board[i][j] = "O";
            if(this.winner("O", this.board)){
              console.log("win");
              return;
            }
            this.board[i][j] = "";
          }
        }
      }
      for(i = 0; i < 3; i ++){
        for(j = 0; j < 3; j ++){
          if(this.board[i][j] == ""){
            this.board[i][j] = "X"
            if(this.winner("X", this.board)){
              this.board[i][j] = "O";
              return;
            }
            this.board[i][j] = "";
          }
        }
      }
      var row;
      var column;
      var found = true;
      while(found){
        row = Math.floor(Math.random() * 3);
        column = Math.floor(Math.random() * 3);
        console.log(row);
        console.log(column);
        if(this.board[row][column] == ""){
          this.board[row][column] = "O";
          return;
        }
      }
    },
    currentPlayer() {
      if (this.player1) {
        return "X";
      } else return "O";
    },
    GameOver() {
      if (this.movesLeft == 0) {
        this.gameOver = true;
      }
    },
    Tocken() {
      if (!this.player1) {
        this.player1 = !this.player1;
        return "X";
      } else {
        this.player1 = !this.player1;
        return "O";
      }
    },
    possibleMoves() {
      return this.movesLeft;
    },
    winner(player, board) {
      //across
      for (var i = 0; i < 3; i++) {
        if ((board[0][i] == player) && (board[1][i] == player) && (board[2][i] == player)) {
          return true;
        }
      }
      //down
      for (i = 0; i < 3; i++) {
        if ((board[i][0] == player) && (board[i][1] == player) && (board[i][2] == player)) {
          return true;
        }
      }

      //vertical left to right
      if ((board[0][0] == player) && (board[1][1] == player) && (board[2][2] == player)) {
        return true;
      }

      //vertical right to left
      if ((board[2][0] == player) && (board[1][1] == player) && (board[0][2] == player)) {
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
  width: 230px;
  height: 230px;
  align-content: center;
}
button{
  margin-left: 1px;
  margin-right: 1px;
  margin-top: 3px;
  background-color: lightblue;
}
</style>
