import { createPinia, setActivePinia } from "pinia"
import { beforeEach, expect, describe, it } from "vitest"
import { useCargoStore } from "../cargo"

describe('player', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should add a cargo', () => {
    const { addCargo, createCargo, cargos,clearCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)
    expect(cargos.length).toBe(1)
    clearCargo()
  })
})