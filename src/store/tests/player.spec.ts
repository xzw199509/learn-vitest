import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';
import { useMapStore } from '../map';
import { usePlayerStore } from '../player';

describe('player', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })
  describe('normal move', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      setupMap([
        [2, 2, 2],
        [2, 2, 2],
        [2, 2, 2],
      ])
    })
    it('should move to left', () => {
      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(0)
    })

    it('should move to Right', () => {
      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
    })
    it('should move to Up', () => {
      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(0)
    })
    it('should move to Down', () => {
      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToDown()
      expect(player.y).toBe(2)
    })
  })
  describe('collision wall', () => {
    beforeEach(() => {
      let map = [
        [1, 1, 1, 1],
        [1, 2, 2, 1],
        [1, 2, 2, 1],
        [1, 1, 1, 1],
      ]
      const { setupMap } = useMapStore()
      setupMap(map)
    })
    it('should not move to left when collision a wall', () => {
      const { movePlayerToLeft, player } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(1)
    })
    it('should not move to right when collision a wall', () => {
      const { movePlayerToRight, player } = usePlayerStore()
      player.x = 2
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(2)
    })
    it('should not move to up when collision a wall', () => {
      const { movePlayerToUp, player } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(1)
    })
    it('should not move to down when collision a wall', () => {
      const { movePlayerToDown, player } = usePlayerStore()
      player.x = 1
      player.y = 2
      movePlayerToDown()
      expect(player.y).toBe(2)
    })
  })
})