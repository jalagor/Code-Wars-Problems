// Your task is to sort a given string. Each word in the string will contain a single number. 
// This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. 
// The words in the input String will only contain valid consecutive numbers.
let string = "4of Fo1r pe6ople g3ood th5e the2"

function order(words){
   return words.split(' ').sort(( a, b ) => a.match(/\d/) - b.match(/\d/) ).join(' ')
}
 


console.log(order(string))