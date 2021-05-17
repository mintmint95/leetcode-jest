const replaceDigits = require('./replaceDigits.js')

describe ('Test function replaceDigits()', () => {
    test (('[1] Input: s = "a1c1e1"'), () => {
        const input = 'a1c1e1'
        expect(replaceDigits(input)).toBe('abcdef')
    })

    test (('[2] Input: s = "a1b2c3d4e"'), () => {
        const input = 'a1b2c3d4e'
        expect(replaceDigits(input)).toBe('abbdcfdhe')
    })
})