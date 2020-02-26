// Write a function that takes an integer as input, and returns the number of bits 
//  that are equal to one in the binary representation of that number. 
//  You can guarantee that input is non-negative.

function countBits(n) {
    let string = n.toString(2)
    return ((string || '').match(/1/g) || []).length
};

console.log( countBits(1234) )