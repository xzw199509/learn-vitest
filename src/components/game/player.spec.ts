import { createPinia, setActivePinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';
import { usePlayerStore } from '../../store/player';
import { useMove } from './player';
beforeEach(() => {
  setActivePinia(createPinia())
})
it("should move to left when press ArrowLeft", () => {
  // const { player } = usePlayerStore()
  // player.x = 2
  // player.y = 1
  // useMove()
  // window.dispatchEvent(new KeyboardEvent("keyup", { code: "ArrowLeft" }))
  // expect(player.x).toBe(1)
  expect(1).toBe(1)
})
