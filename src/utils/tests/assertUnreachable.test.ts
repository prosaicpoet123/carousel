import { assertUnreachable } from '../assertUnreachable'

describe('assertUnreachable()', () => {
  it('should throw', () => {
    const a = 'a' as never
    expect(() => assertUnreachable(a)).toThrow()
  })
})
