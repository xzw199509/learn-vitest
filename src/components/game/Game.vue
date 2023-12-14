<template>
  <div>
    <Map></Map>
    <template v-for="target in targets" :key="index">
      <Target :x="target.x" :y="target.y"></Target>
    </template>
    <Player></Player>
    <template v-for="cargo in cargos" :key="index">
      <Cargo :cargo="cargo"></Cargo>
    </template>
  </div>
</template>
<script setup lang="ts">
import Map from './Map.vue'
import Player from './Player.vue'
import Cargo from './Cargo.vue'
import Target from './Target.vue'
import { useCargoStore } from '../../store/cargo'
import { useTargetStore } from '../../store/target'
const { cargos, createCargo, addCargo } = useCargoStore()
const { targets } = useTargetStore()
addCargo(createCargo({ x: 2, y: 2 }))
addCargo(createCargo({ x: 3, y: 3 }))
</script>
<style scoped></style>
