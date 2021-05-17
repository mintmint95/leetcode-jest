function replaceDigits (s) { 
    let input = s.split('')
    let alphabets = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let output = ''

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0) {
            let indexInAlphabets = alphabets.indexOf(input[i])
            if (i === input.length - 1) {
                output += input[i]
            } else {
                let result = alphabets[indexInAlphabets + (+input[i+1])]
                output += input[i] + result
            }
            
        }
    }
    return output
    
}

module.exports = replaceDigits