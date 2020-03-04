// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

function createPhoneNumber(array){
    let numbers = array.join('')
    return `(${numbers.substring(0, 3)}) ${numbers.substring(3, 6)}-${numbers.substring(6, 10)}`   
}

arr=[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

console.log(createPhoneNumber(arr))