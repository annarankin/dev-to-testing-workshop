import { compatibilityLevel } from './'

describe('compatibilityLevel', () => {
  const listA = ["A", "B", "C", "D"]
  const listB = ["A", "B", "C"]
  const listC = [1, 2, 3]

  it('returns 100 when arrays are identical', () => {
    expect(compatibilityLevel(listA, listA)).toEqual(100)
  })

  it('returns a whole-number percentage of overlap when arrays are not identical', () => {
    expect(compatibilityLevel(listA, listB)).toEqual(75)
  })

  it('returns 0 when given two arrays with no overlap', () => {
    expect(compatibilityLevel(listA, listC)).toEqual(0)
  })
})
