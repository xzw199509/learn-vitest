<template>
  <div class="" >
    <div class="flex" style="height:200px">
      <div class="w-4/6 bg-pink-400">
        <MapEdit></MapEdit>
      </div>
      <div>数据展示区</div>
    </div>
    <div class="">
      <EditElementView></EditElementView>
    </div>
  </div> 
</template>
<script setup lang="ts">
import MapEdit from '@/components/edit/MapEdit.vue';
import EditElementView from '@/components/edit/EditElementView.vue';
</script>
<style scoped></style>
