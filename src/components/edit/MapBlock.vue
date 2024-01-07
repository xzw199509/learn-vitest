<template>
  <div class="border border-white" @click="handleClick()" @mousedown="handleMouseDown" @mousemove="handleMouseMove">
    <template v-if="map[props.y][props.x] === MapTile.WALL">
      <img :src="wallImg" alt="" draggable="false" />
    </template>
    <template v-else-if="map[props.y][props.x] === MapTile.FLOOR">
      <img :src="floorImg" alt="" draggable="false" />
    </template>
  </div>
</template>
<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile } from '@/store/map'
import { useMapEditStore } from '@/store/edit/mapEdit'
import { useEditElementStore } from '@/store/edit/editElement'
import { useDrag } from '@/composables/useDrag'

const { map } = useMapEditStore()
const { getCurrentSelectedEditElement } = useEditElementStore()
interface Props {
  x: number
  y: number
}
const props = defineProps<Props>()
function handleClick() {
  getCurrentSelectedEditElement().execute(props)
}

const { startDrag, stopDrag, isDragging } = useDrag()
function handleMouseDown() {
  startDrag()
  window.addEventListener('mouseup', handleMouseUp)
}
function handleMouseUp() {
  stopDrag()
  window.removeEventListener('mouseup', handleMouseUp)
}
function handleMouseMove() {
  if (isDragging()) {
    getCurrentSelectedEditElement()?.execute(props)
  }
}
</script>
