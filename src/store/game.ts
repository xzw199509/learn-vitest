import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useCargoStore } from './cargo';

interface Game {
  isCameCompleted: boolean
}
export const useGameStore = defineStore("game", () => {
  const game = reactive<Game>({
    isCameCompleted: false
  })
  function detectionGameCompleted() {
    const { cargos } = useCargoStore()
    game.isCameCompleted = cargos.every(c => c.onTarget)
  }
  return { game, detectionGameCompleted }
})