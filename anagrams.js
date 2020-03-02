// Write a function that will find all the anagrams of a word from a list. 
// Given a word (sring) and an array of words(strings), 
// return an array of all the anagrams or an empty array if there are none.

function findAnagrams( word, list ){
    return list.filter(item=>{
        return format(item) === format(word)
    })
}
function format(input){return input.split('').sort().join()}
const words = ['libl', 'llib', 'billl', 'nooo']
console.log(findAnagrams('bill', words))