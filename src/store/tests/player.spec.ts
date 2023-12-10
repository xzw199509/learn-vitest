import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';
import { usePlayerStore } from '../player';

describe('player', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
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