//Write a program that will calculate the number 
//of trailing zeros in a factorial of a given number.  
 

function zeros (n) {
    let trailingZeros = 0 
    for (let i = 5; n / i >= 1; i *= 5){
        trailingZeros += n / i; 
    }
    return trailingZeros
}  
 
console.log(zeros(10))