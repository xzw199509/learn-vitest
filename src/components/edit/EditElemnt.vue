<template>
  <div @click="handleClick">
    <img :src="editElement.img" alt="" />
  </div>
</template>
<script setup lang="ts">
import { type EditElement, useEditElementStore } from '@/store/edit/editElement'

const { setCurrentSelectedEditElement } = useEditElementStore()
interface Props {
  editElement: EditElement
}
const props = defineProps<Props>()

function handleClick() {
  setCurrentSelectedEditElement(props.editElement)
}
</script>
<style scoped></style>
