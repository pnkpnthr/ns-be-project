const { countSmileyFace } = require('./smiley')

describe('countSmileyFace function', () => {
    test('should return the correct count of smiley faces', () => {
        expect(countSmileyFace([':)', ';(', ';}', ':-D'])).toBe(2)
        expect(countSmileyFace([';D', ':-(', ':-)', ';~)'])).toBe(3)
        expect(countSmileyFace([';]', ':[', ';*', ':$', ';-D'])).toBe(1)
        expect(countSmileyFace([':(', ';(', ':>', ';P'])).toBe(0)
    })

    test('should handle edge cases with only eyes and mouths', () => {
        expect(countSmileyFace([':)', ';)', ':D', ';D'])).toBe(4)
    })

    test('should handle edge cases with noses', () => {
        expect(countSmileyFace([':-)', ':-D', ':~)', ':~D', ';-)', ';-D', ';~)', ';~D'])).toBe(8)
    })

    test('should return 0 for an empty array', () => {
        expect(countSmileyFace([])).toBe(0)
    })
})