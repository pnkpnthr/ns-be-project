/**
 *
 * @param {string} text string of value example "aabb", "abcde"
 * @returns {string[]} string array of result
 */
const manipulate = (text) => {
  const permSet = new Set()

  function generatePermutations(chars, previousText) {
    if (chars.length === 0) {
      permSet.add(previousText.join(""))
      return
    }

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i]
      chars.splice(i, 1)
      previousText.push(char)
      generatePermutations(chars, previousText)
      chars.splice(i, 0, char)
      previousText.pop()
    }
  }

  if (text) {
    generatePermutations(text.split(""), [])
    return Array.from(permSet)
  } else {
    return "invalid input"
  }
}

module.exports = {
  manipulate
}
