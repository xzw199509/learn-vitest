import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useCargoStore } from './cargo';
import { Map, useMapStore } from './map';
import { usePlayerStore } from './player';
import { useTargetStore } from './target';
interface Game {
  isCameCompleted: boolean
}
interface LevelGameData {
  map: Map,
  player: { x: number, y: number },
  cargos: { x: number, y: number }[],
  targets: { x: number, y: number }[]
}
export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isCameCompleted: false
  })
  function detectionGameCompleted() {
    const { cargos } = useCargoStore()
    game.isCameCompleted = cargos.every(c => c.onTarget)
  }
  function setupGame(levelGameData: LevelGameData) {
    const { player } = usePlayerStore()
    const { setupMap } = useMapStore()
    const { addCargo, createCargo } = useCargoStore()
    const { addTarget, createTarget } = useTargetStore()
    player.x = levelGameData.player.x
    player.y = levelGameData.player.y
    setupMap(levelGameData.map)
    levelGameData.cargos.forEach(c => {
      addCargo(createCargo({ x: c.x, y: c.y }))
    })
    levelGameData.targets.forEach(t => {
      addTarget(createTarget({ x: t.x, y: t.y }))
    })
  }
  return { game, detectionGameCompleted, setupGame }
})