import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';

import { useCargoStore } from '../cargo'
import { useGameStore } from '../game';
import { useMapStore } from '../map';
import { useTargetStore } from '../target';

describe("game", () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    let map = [
      [1, 1, 1, 1, 1, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 1],
      [1, 1, 1, 1, 1, 1],
    ]
    const { setupMap } = useMapStore()
    setupMap(map)
  })
  it("should game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    moveCargo(cargo, 1, 0)
    const { detectionGameCompleted,game } = useGameStore()
    detectionGameCompleted()
    expect(game.isCameCompleted).toBe(true)
  })
  it("should not game completed", () => {
    const { addCargo, createCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    const { addTarget, createTarget } = useTargetStore()
    addTarget(createTarget({ x: 3, y: 1 }))
    moveCargo(cargo, 1, 0)
    moveCargo(cargo, 1, 0)
    const { detectionGameCompleted,game } = useGameStore()
    detectionGameCompleted()
    expect(game.isCameCompleted).toBe(false)
  })

})