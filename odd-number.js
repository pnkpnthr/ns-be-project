/**
 * 
 * @param {number[]} numbers list of numbers example [7], [0], [1,1,2], [0,1,0,0,1], [1,2,3,4,5,6,7,8,9,0]
 * @returns {number} one number that odd number
 */
const findOddNumber = (listOfNumber) => {
    let oddNumber, oddCount = 0
    let counts = {}

    listOfNumber.forEach(num => {
        if (Number.isInteger(num)) {
            counts[num] = (counts[num] || 0) + 1
        }
    })

    if (Object.keys(counts).length !== 0) {
        for (const key in counts) {
            if (counts[key] % 2 !== 0) {
                oddNumber = parseInt(key)
                oddCount = counts[key]
                break
            }
        }

        if (oddCount === 0) {
            return `error: no odd number`
        } else {
            return `[${listOfNumber}] should return ${oddNumber}, because it occurs ${oddCount} time(s) (which is odd).`
        }
    } else {
        return `error: no valid integer found`
    }
}


module.exports = {
    findOddNumber
}