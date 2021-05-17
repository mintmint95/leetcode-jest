function checkIfPangram (sentence) {
    let arrSentence = sentence.split('')
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'
    let arrAlphabet = alphabet.split('')
    let count = 0
    
    for (let i = 0; i < arrAlphabet.length; i++) {
        if (arrSentence.indexOf(arrAlphabet[i]) !== -1) {
            count += 1
        }
    }

    if (count === 26) {
        return true
    } return false
}

module.exports = checkIfPangram