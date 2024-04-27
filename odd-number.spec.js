const { findOddNumber } = require("./odd-number")

describe("findOdd function", () => {
    test('should return the odd number along with its count', () => {
        expect(findOddNumber([7])).toBe("[7] should return 7, because it occurs 1 time(s) (which is odd).")
        expect(findOddNumber([0])).toBe("[0] should return 0, because it occurs 1 time(s) (which is odd).")
        expect(findOddNumber([1,1,2])).toBe("[1,1,2] should return 2, because it occurs 1 time(s) (which is odd).")
        expect(findOddNumber([0,1,0,1,0])).toBe("[0,1,0,1,0] should return 0, because it occurs 3 time(s) (which is odd).")
        expect(findOddNumber([1,2,2,3,3,3,4,3,3,3,2,2,1])).toBe("[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it occurs 1 time(s) (which is odd).")
        expect(findOddNumber([-1,-1,2])).toBe("[-1,-1,2] should return 2, because it occurs 1 time(s) (which is odd).")
        expect(findOddNumber([-3,-3,-3,-3,-4,-4,-5,-5,-5])).toBe("[-3,-3,-3,-3,-4,-4,-5,-5,-5] should return -5, because it occurs 3 time(s) (which is odd).")
    })

    test('should handle no odd number in the list', () => {
        expect(findOddNumber([2,2,4,4])).toBe("error: no odd number")
        expect(findOddNumber([0,0,0,0,0,0])).toBe("error: no odd number")
    })

    test('should handle invalid input', () => {
        expect(findOddNumber([])).toBe("error: no valid integer found")
        expect(findOddNumber([""])).toBe("error: no valid integer found")
        expect(findOddNumber([null])).toBe("error: no valid integer found")
        expect(findOddNumber(["abc"])).toBe("error: no valid integer found")
    })
})