import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { Position } from '../composables/usePosition';

export enum MapTile {
  WALL = 1,
  FLOOR = 2
}
type Map = MapTile[][]


export const useMapStore = defineStore("map", () => {
  let map = reactive<Map>([])
  function setupMap(newMap: Map) {
    // 修改值不改变引用
    map.splice(0, map.length, ...newMap)
  }

  function isWall(position: Position) {
    return map[position.y][position.x] === MapTile.WALL
  }
  return { map, setupMap, isWall }
})