import { defineStore } from "pinia"
import { Position } from '@/composables/usePosition';
import { MapTile } from '../map';
import { useMapEditStore } from './mapEdit';

import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'

export interface EditElement {
  img: string
  execute: (position: Position) => void
}
export const floorEditElement: EditElement = {
  img: floorImg,
  execute(position: Position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  }
}
export const wallEditElement: EditElement = {
  img: wallImg,
  execute(position: Position) {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  }
}
export const useEditElementStore = defineStore('edit-element', () => {
  let currentSelectedEditElement: EditElement

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement
  }
  function setCurrentSelectedEditElement(editElement: EditElement) {
    currentSelectedEditElement = editElement
  }
  return {
    getCurrentSelectedEditElement,
    setCurrentSelectedEditElement
  }
})