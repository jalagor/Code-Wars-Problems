// write a function that takes an array of integers and an integer 
// the function should move all instances of the given integer to the end of the array  
// the array should be mutated  
// the order of other integers doesn't matter  
// input: 3, [5, 1, 3, 2, 4, 3, 3, 6] => output: [5, 1, 2, 4, 6, 3, 3, 3] 5, 1, and 2 could be ordered differently


function moveElementToEnd(array, valueToMove){   
    for(i = 0; i<array.length; i++){
        array[i] === valueToMove ? 
        array.splice(i, 1) && array.push(valueToMove) : 
        console.log('not it chief'); 
        console.log(array[i], i)
    }
    return array
} 
 
let values = [1, 2, 3, 4, 2, 2, 5, 2] 
let values2 = [2, 1, 2, 3, 4, 2, 2, 5]
let values3 = [2, 1, 2, 3, 4, 2, 2, 5, 2]
let values4 = [3, 1, 2, 3, 4, 2, 2, 5, 3] 

console.log(moveElementToEnd(values, 2))
// console.log(moveElementToEnd(values2, 2))
// console.log(moveElementToEnd(values3, 2))
// console.log(moveElementToEnd(values4, 2))
