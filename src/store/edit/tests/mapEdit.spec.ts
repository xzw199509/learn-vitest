import { setActivePinia, createPinia } from 'pinia';
import { it, expect, describe, beforeEach } from 'vitest';
import { useMapEditStore } from '../mapEdit';

describe('mapEdit', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should init map', () => {
    const { initMap, map } = useMapEditStore()
    const row = 5
    const col = 5
    initMap()
    expect(map.length).toBe(row)
    expect(map[0].length).toBe(col)
  })
  describe('row', () => {
    it('should add a line when increase', () => {
      const { updateMapRow, setRow, initMap, map } = useMapEditStore()
      initMap(2, 2)
      setRow(4)
      updateMapRow()
      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
    it('should remove a line when increase', () => {
      const { updateMapRow, setRow, initMap, map } = useMapEditStore()
      initMap(3, 3)
      setRow(1)
      updateMapRow()
      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
          ],
        ]
      `)
    })
  })
  describe('col', () => {
    it('should add a line when increase', () => {
      const { updateMapCol, setCol, initMap, map } = useMapEditStore()
      initMap(2, 2)
      setCol(4)
      updateMapCol()
      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
            2,
            2,
          ],
          [
            2,
            2,
            2,
            2,
          ],
        ]
      `)
    })
    it('should remove a line when increase', () => {
      const { updateMapCol, setCol, initMap, map } = useMapEditStore()
      initMap(3, 3)
      setCol(2)
      updateMapCol()
      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
  })
})