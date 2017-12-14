import { compatibilityLevel } from './'

describe('compatibilityLevel', () => {
  it('returns 100 when arrays are identical', () => {
    const listA = ["A", "B", "C", "D"]
    const listB = ["A", "B", "C"]
    const listC = [1, 2, 3]

    expect(compatibilityLevel(listA, listA)).toEqual(100)
  })
})
