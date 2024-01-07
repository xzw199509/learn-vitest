<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>
<script setup lang="ts">
import keeperImg from '@/assets/keeper.png'
// import { STEP_EDIT, usePosition } from '@/composables/usePosition'
import { STEP_GAME, usePosition } from '@/composables/usePosition'
import { useEditPlayerStore } from '@/store/edit/editPlayer'
const { player } = useEditPlayerStore()
// const { position } = usePosition(player, STEP_EDIT)
const { position } = usePosition(player, STEP_GAME)
</script>
<style scoped></style>
