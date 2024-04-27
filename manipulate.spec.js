const { manipulate } = require("./manipulate")

describe("manipulate function", () => {
  test("case pass: returns an array of unique permutations for valid input", () => {
    const inputString = "ade"
    const expectedResult = ["ade", "aed", "dae", "dea", "ead", "eda"]

    expect(manipulate(inputString)).toEqual(
      expect.arrayContaining(expectedResult)
    )
  })

  test("case pass: returns an array of unique permutations for valid input", () => {
    const inputString = "aabb"
    const expectedResult = ["aabb", "abab", "abba", "baab", "baba", "bbaa"]

    expect(manipulate(inputString)).toEqual(
      expect.arrayContaining(expectedResult)
    )
  })

  test('case failed: returns "invalid input" for empty input', () => {
    const inputString = ""
    const expectedResult = "invalid input"

    expect(manipulate(inputString)).toEqual(expectedResult)
  })

  test('case failed: returns "invalid input" for null input', () => {
    const inputString = null
    const expectedResult = "invalid input"

    expect(manipulate(inputString)).toEqual(expectedResult)
  })

  test('case failed: returns "invalid input" for undefined input', () => {
    const inputString = undefined
    const expectedResult = "invalid input"

    expect(manipulate(inputString)).toEqual(expectedResult)
  })
})
