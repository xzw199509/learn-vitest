<template>
  <div class="absolute">
    <div v-for="(row, i) in map" class="flex">
      <div v-for="(col, j) in map[i]">
        <!-- {{ row }} __{{ col }} -->
        <!-- {{ map[i][j] }} -->
        <template v-if="map[i][j] === MapTile.WALL">
          <img :src="wallImg" alt="" />
        </template>
        <template v-else-if="map[i][j] === MapTile.FLOOR">
          <img :src="floorImg" alt="" />
        </template>
      </div>
    </div>
    <!-- <div class="bg-red-500">map</div>
    <h1 className="text-3xl font-bold underline">Hello world!</h1> -->
  </div>
</template>
<script setup lang="ts">
import floorImg from '../../assets/floor.png'
import wallImg from '../../assets/wall.png'
import { useMapStore } from '../../store/map'
import { MapTile } from '@/store/map';
const { map } = useMapStore()
</script>
<style scoped></style>
