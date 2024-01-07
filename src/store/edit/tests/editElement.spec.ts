import { MapTile } from '@/store/map';
import { setActivePinia, createPinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';
import { wallEditElement, useEditElementStore, floorEditElement } from '../EditElement';
import { useMapEditStore } from '../mapEdit';

describe('editElement', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should change to wall when current selected element is wall', () => {
    const { map } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    setCurrentSelectedEditElement(wallEditElement)
    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL)
  })
  it('should change to wall when current selected element is floor', () => {
    const { map } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    setCurrentSelectedEditElement(floorEditElement)
    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.FLOOR)
  })
})