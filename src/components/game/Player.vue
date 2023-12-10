<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import keeperImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../store/player'
const { player } = usePlayerStore()
// useMove()
// function useMove() {
const { movePlayerToLeft, movePlayerToRight, movePlayerToTop, movePlayerToBottom } = usePlayerStore()

window.addEventListener('keyup', (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowLeft':
      movePlayerToLeft()
      break
    case 'ArrowRight':
      movePlayerToRight()
      break
    case 'ArrowTop':
      movePlayerToTop()
      break
    case 'ArrowBottom':
      movePlayerToBottom()
      break
    default:
      break
  }
})
// }

const STEP = 32
const position = computed(() => {
  return { left: player.x * STEP + 'px', top: player.y * STEP + 'px' }
})
</script>
<style scoped></style>
