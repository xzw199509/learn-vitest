import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';
import { gameData, LevelGameData } from '../../game/gameData';

import { useCargoStore } from '../cargo'
import { useGameStore } from '../game';
import { useMapStore } from '../map';
import { usePlayerStore } from '../player';
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
    const { detectionGameCompleted, game } = useGameStore()
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
    const { detectionGameCompleted, game } = useGameStore()
    detectionGameCompleted()
    expect(game.isCameCompleted).toBe(false)
  })
  it('should setup game', () => {
    const { setupGame } = useGameStore()

    const levelGameData = {
      player: {
        x: 1,
        y: 1,
      },
      map: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      cargos: [
        {
          x: 2,
          y: 2,
        },
        {
          x: 3,
          y: 4,
        },
      ],
      targets: [
        {
          x: 4,
          y: 3,
        },
        {
          x: 6,
          y: 3,
        },
      ],
    }
    const gameData = [levelGameData]
    setupGame(gameData)
    expectSetupLevelGameData(levelGameData)
  })
  it('should to next level', () => {
    const { game, setupGame, toNextLevel } = useGameStore()

    const levelGameData = {
      player: {
        x: 1,
        y: 1,
      },
      map: [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1, 1],
      ],
      cargos: [
        {
          x: 2,
          y: 2,
        },
        {
          x: 3,
          y: 4,
        },
      ],
      targets: [
        {
          x: 4,
          y: 3,
        },
        {
          x: 6,
          y: 3,
        },
      ],
    }
    const secondLevelGameData = {
      player: {
        x: 1,
        y: 1,
      },
      map: [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
      ],
      cargos: [
        {
          x: 2,
          y: 2,
        },
        {
          x: 3,
          y: 4,
        },
      ],
      targets: [
        {
          x: 4,
          y: 3,
        },
        {
          x: 6,
          y: 3,
        },
      ],
    }
    const gameData = [levelGameData, secondLevelGameData]
    setupGame(gameData)

    toNextLevel()
    expect(game.level).toBe(2)
    expectSetupLevelGameData(secondLevelGameData)
  })
  it('should be reset game completed when to next level', () => {
    const { game, setupGame, toNextLevel } = useGameStore()
    game.isCameCompleted = true
    setupGame(gameData)
    toNextLevel()
    expect(game.isCameCompleted).toBe(false)
  })
})

function expectSetupLevelGameData(levelGameData: LevelGameData) {
  const { player } = usePlayerStore()
  const { map } = useMapStore()
  const { cargos } = useCargoStore()
  const { targets } = useTargetStore()
  expect(player.x).toBe(levelGameData.player.x)
  expect(player.y).toBe(levelGameData.player.y)
  expect(map).toEqual(levelGameData.map)
  expect(cargos.length).toBe(levelGameData.cargos.length)
  expect(targets.length).toBe(levelGameData.targets.length)
}