import { createPinia, setActivePinia } from "pinia"
import { beforeEach, expect, describe, it } from "vitest"
import { useCargoStore } from "../cargo"
import { useTargetStore } from "../target"

describe('cargo', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should add a cargo', () => {
    const { addCargo, createCargo, cargos } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)
    expect(cargos.length).toBe(1)
  })
  // describe("on target", () => {
  //   it("shift in", () => {
  //     const { addCargo, createCargo, moveCargo } = useCargoStore()
  //     const cargo = createCargo({ x: 2, y: 1 })
  //     addCargo(cargo)
  //     const { addTarget, createTarget } = useTargetStore()
  //     addTarget(createTarget({ x: 3, y: 1 }))
  //     moveCargo(cargo, 1, 0)
  //     expect(cargo.onTarget).toBe(true)
  //   })
  //   it("shift out", () => {
  //     const { addCargo, createCargo, moveCargo } = useCargoStore()
  //     const cargo = createCargo({ x: 2, y: 1 })
  //     addCargo(cargo)
  //     const { addTarget, createTarget } = useTargetStore()
  //     addTarget(createTarget({ x: 3, y: 1 }))
  //     moveCargo(cargo, 1, 0)
  //     moveCargo(cargo, 1, 0)
  //     expect(cargo.onTarget).toBe(false)
  //   })
  // })
  it('should clean all cargos', () => {
    const { addCargo, createCargo, cargos, cleanAllCargo } = useCargoStore()
    const cargo = createCargo({ x: 2, y: 1 })
    addCargo(cargo)

    cleanAllCargo()
    expect(cargos.length).toBe(0)
  })
})