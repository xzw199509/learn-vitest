import { defineStore } from "pinia"
import { Position } from '@/composables/usePosition';
import { MapTile } from '../map';
import { useMapEditStore } from './mapEdit';

import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import playerImg from '@/assets/keeper.png'
import { useEditPlayerStore } from "./editPlayer";
import { ref } from "vue";

export interface EditElement {
  name:string
  img: string
  execute: (position: Position) => void
}
export const floorEditElement: EditElement = {
  name:'地板',
  img: floorImg,
  execute(position: Position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  }
}
export const wallEditElement: EditElement = {
  name:'墙',
  img: wallImg,
  execute(position: Position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  }
}
export const playerEditElement: EditElement = {
  name:'玩家',
  img: playerImg,
  execute(position: Position) {
    const { player } = useEditPlayerStore()
    player.x = position.x
    player.y = position.y
  }
}
export const useEditElementStore = defineStore('edit-element', () => {
  let currentSelectedEditElement = ref<EditElement|undefined>()

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement.value
  }
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement.value = editElement
  }
  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement
  }
})