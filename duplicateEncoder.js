// The goal of this exercise is to convert a string to a new string
// where each character in the new string is "(" if that character appears only once in the original string, 
// or ")" if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

function duplicateEncode(word){
    let encoded = ''
    let formatted = word.toLowerCase().split('').sort().join('')
    let matches = formatted.match(/(.)\1+/g) || []

    console.log(matches)
    for(let i = 0; i < matches.length; i++){
        matches[i] = matches[i].charAt(1)
    }
    for(c of word.toLowerCase()){matches.includes(c) ? encoded += ')' : encoded += '('}
    return encoded
}
    

console.log(duplicateEncode('din'))