// Write a function that will find all the anagrams of a word from a list. 
// Given a word (sring) and an array of words(strings), 
// return an array of all the anagrams or an empty array if there are none.

function findAnagrams( word, list ){
    const splitWord = word.split('').sort().join()
    let tes="guy"
    const newList = list.filter(item=>{
       return item.length === word.length
    })
    const finished =  newList.filter(item=>{
        return item.split('').sort().join() == splitWord
    })
    return finished
}
const words = ['libl', 'llib', 'billl', 'nooo']
console.log(findAnagrams('bill', words))