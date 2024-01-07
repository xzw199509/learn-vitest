import { it, expect, describe } from 'vitest';
import { useDrag } from '../useDrag';

describe("useDrag", () => {
  it('should start drag', () => {
    const { startDrag, isDragging } = useDrag()
    startDrag()
    expect(isDragging()).toBe(true)
  })
})