import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { useCargoStore } from './cargo';
import { useMapStore } from './map';

export const usePlayerStore = defineStore("player", () => {
  const player = reactive({
    x: 1,
    y: 1,
  })
  function _move(dx: number, dy: number) {
    const nextPosition = {
      x: player.x + dx,
      y: player.y + dy

    }
    if (isWall(nextPosition)) return

    const { findCargo } = useCargoStore()
    // const cargo = cargos.find((c) => {
    //   return c.x === player.x - 1 && c.y === player.y
    // })
    const cargo = findCargo(nextPosition)
    if (cargo) {
      cargo.x += dx
      cargo.y += dy
    }
    player.x += dx
    player.y += dy
  }
  const { isWall } = useMapStore()
  function movePlayerToLeft() {
    _move(-1, 0)
    // if (isWall({ x: player.x - 1, y: player.y })) return

    // const { cargos, findCargo } = useCargoStore()
    // // const cargo = cargos.find((c) => {
    // //   return c.x === player.x - 1 && c.y === player.y
    // // })
    // const cargo = findCargo({ x: player.x - 1, y: player.y })
    // if (cargo) {
    //   cargo.x -= 1
    // }
    // player.x -= 1
  }
  function movePlayerToRight() {
    _move(1, 0)
    // if (isWall({ x: player.x + 1, y: player.y })) return
    // player.x += 1
  }
  function movePlayerToUp() {
    _move(0, -1)
    // if (isWall({ x: player.x, y: player.y - 1 })) return
    // player.y -= 1
    // console.log('movePlayerToUp');

  }
  function movePlayerToDown() {
    _move(0, 1)
    // if (isWall({ x: player.x, y: player.y + 1 })) return
    // player.y += 1
    // console.log('movePlayerToDown');
  }
  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToUp, movePlayerToDown }
})