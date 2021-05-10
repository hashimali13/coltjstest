// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let final=""
    for(let i=0; i<= str.length ;i++ ){
        final =  str.charAt(i) + final
    }

    return final
}

module.exports = reverse;
