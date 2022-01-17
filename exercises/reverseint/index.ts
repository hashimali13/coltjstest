// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9
function reverseInt (reverse: number){
    let negcheck =false;
    if (reverse<0){
        reverse = reverse * -1
        negcheck = true;
    }
    let reversed= 0;
    let pop= 0;
    while(reverse>0){
        pop= reverse %10;
        reverse = Math.floor(reverse/10)
        reversed = reversed * 10 + pop;
    }
    if(negcheck){
    return reversed * -1
    }
    return reversed;
}

console.log(reverseInt(543))

module.exports = reverseInt;
