/**
 * 
 * @param {string[]} texts list of string [":)", ":(", ":>"]
 * @returns {number} amount of smily face detected
 */
const countSmileyFace = (smileyList) => {
    const validEyes = [':', ';']
    const validNoses = ['-', '~']
    const validMouths = [')', 'D']
    
    let count = 0

    smileyList.forEach(face => {
        if (
            (validEyes.includes(face[0]) && validMouths.includes(face[1])) ||
            (validEyes.includes(face[0]) && validNoses.includes(face[1]) && validMouths.includes(face[2]))
        ) {
            count++
        }
    })

    return count
}

module.exports = {
    countSmileyFace
}