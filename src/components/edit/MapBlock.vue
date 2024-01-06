<template>
  <div class="border border-white" @click="handleClick()">
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src="wallImg" alt="" />
    </template>
    <template v-else-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="floorImg" alt="" />
    </template>
  </div>
</template>
<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile } from '@/store/map'
import { reactive } from 'vue'
import { useMapEditStore } from '@/store/edit/mapEdit'

const { map } = useMapEditStore()
interface Props{
  x:number
  y:number
}
const props = defineProps<Props>()
function handleClick() {
  map[props.y][props.x] = MapTile.WALL
}
</script>
