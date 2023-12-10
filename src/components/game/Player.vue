<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>
<script setup lang="ts">
import keeperImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'
const { player } = usePlayerStore()
const STEP = 32
const position = {
  left: player.x * STEP + 'px',
  top: player.y * STEP + 'px',
}
</script>
<style scoped></style>
