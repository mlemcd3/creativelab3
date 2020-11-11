<template>
    <div @click="$emit('click')" class="cell">
      <span v-if="move !== ''">{{ move }}</span>
    </div>
</template>

<script>
  export default {
    props: {
      move: String,
    }
  }
</script>

<style>
  .cell {
    width: 70px;
    height: 70px;
    border: 2px solid rgb(75,75,75);
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
  }
</style>
