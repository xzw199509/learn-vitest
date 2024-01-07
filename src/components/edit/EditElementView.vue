<template>
  <div>
    <h3>元素选择区</h3>
    <div class="flex space-x-2 m-2">
      <h4>地图:</h4>
      <EditElement :edit-element="wallEditElement"></EditElement>
      <EditElement :edit-element="floorEditElement"></EditElement>
      <!-- <div @click="handleClick(wallEditElement)">
        <img :src="wallImg" alt="" />
      </div>
      <div @click="handleClick(floorEditElement)">
        <img :src="floorImg" alt="" />
      </div> -->
    </div>
  </div>
</template>
<script setup lang="ts">
// import floorImg from '@/assets/floor.png'
// import wallImg from '@/assets/wall.png'
import EditElement from './EditElemnt.vue'
import { wallEditElement, floorEditElement } from '@/store/edit/editElement'
</script>
<style scoped></style>
