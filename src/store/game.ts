import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { GameData } from '../game/gameData';
import { useCargoStore } from './cargo';
import { Map, useMapStore } from './map';
import { usePlayerStore } from './player';
import { useTargetStore } from './target';
interface Game {
  isCameCompleted: boolean
  level: number
}
interface LevelGameData {
  map: Map,
  player: { x: number, y: number },
  cargos: { x: number, y: number }[],
  targets: { x: number, y: number }[]
}
export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isCameCompleted: false,
    level: 1
  })

  let _gameData: GameData

  function detectionGameCompleted() {
    const { cargos } = useCargoStore()
    game.isCameCompleted = cargos.every(c => c.onTarget)
  }

  function setupGame(gameData: GameData) {
    _gameData = gameData
    setupLevel()
  }
  function toNextLevel() {
    game.level += 1
    setupLevel()
  }
  function setupLevel(){
    let levelGameData = _gameData[game.level - 1]
    const { player } = usePlayerStore()
    const { setupMap } = useMapStore()
    const { addCargo, createCargo, cleanAllCargo } = useCargoStore()
    const { addTarget, createTarget, cleanAllTarget } = useTargetStore()
    player.x = levelGameData.player.x
    player.y = levelGameData.player.y
    setupMap(levelGameData.map)
    cleanAllCargo()
    levelGameData.cargos.forEach(c => {
      addCargo(createCargo({ x: c.x, y: c.y }))
    })
    cleanAllTarget()
    levelGameData.targets.forEach(t => {
      addTarget(createTarget({ x: t.x, y: t.y }))
    })
  }
  return { game, toNextLevel, detectionGameCompleted, setupGame }
})