// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(word: string) {
    let words = new Map();
    for(let char of word){
        if(words.has(char)){
            words.set(char,words.get(char)+1)
        }else{
            words.set(char,1)
        }
    }
    let most = ['nan',0]
    for(let entry of words){
        if(entry[1]>most[1]){
            most = entry
        }
    }
    return most[0]
}

console.log(maxChar("apple 1231111"))

module.exports = maxChar;
