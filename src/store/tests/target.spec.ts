import { createPinia, setActivePinia } from "pinia"
import { beforeEach, expect, describe, it } from "vitest"

import { useTargetStore } from "../target"

describe('target', () => {

  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should clean all targets', () => {
    const { addTarget, createTarget, cleanAllTarget, targets } = useTargetStore()
    const target = createTarget({ x: 2, y: 1 })
    addTarget(target)
    
    cleanAllTarget()
    expect(targets.length).toBe(0)
  })
})