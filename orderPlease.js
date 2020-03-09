// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.
string = "4of Fo1r pe6ople g3ood th5e the2"

function order(words){
    let sortedArray = words.split(' ').sort(function( a, b ){
        let aWord = a.match(/[1-9]+/g)
        let bWord = b.match((/[1-9]+/g))
        if (aWord < bWord) {
            return -1
        } if (aWord>bWord){
            return 1
        } else { return 0}
    }) 
     return words === "" ? words : sortedArray.join(' ')
}
 


console.log(order(string))