//Write a program that will calculate the number 
//of trailing zeros in a factorial of a given number.  
 

function zeros (n) {
    let trailingZeros = 0 
    while (n>0) {
        n = Math.floor(n/5);
        trailingZeros += n
    }
    return trailingZeros
}  
 
console.log(zeros(30))