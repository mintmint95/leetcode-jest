const checkIfPangram = require('./checkIfPangram.js');

describe ('Test function checkIfPangram()', () => {
    test ('[1] Input: sentence = "thequickbrownfoxjumpsoverthelazydog"', () => {
        const sentence = "thequickbrownfoxjumpsoverthelazydog"
        expect(checkIfPangram(sentence)).toBe(true)
    })
    test ('[2] Input: sentence = "leetcode""', () => {
        const sentence = "leetcode"
        expect(checkIfPangram(sentence)).toBe(false)
    })
})