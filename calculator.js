// Create a simple calculator that given a string of operators (), +, -, *, / 
//  and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7  
 
 
const Calculator = function() {
    this.evaluate = string => { 
        let result = 0, 
        array = string.split('-') 

        for(i = 0; i< array.length; i++){
            array[i] === '*' ? 
            result += operations('*', array[i-1], array[i+1]) : 
            result += 0
        }
        // console.log( operations('*', array[0], array[2] ) ) 
        return array
    } 
};   
 
function operations(operand, num1, num2){
   const math =  {
        '+': (num1, num2) => { return num1 += num2 }, 
        '-': (num1, num2) => { return num1 -= num2 }, 
        '*': (num1, num2) => { return num1 *= num2 }, 
        '/': (num1, num2) => { return num1 /= num2 }
    }
    return math[operand](num1, num2)
} 
 
/* 
regex 
    any digit /\d+/g
    operator [operator]

*/
let calculate = new Calculator()
// console.log(calculate.evaluate('173')) // 173
console.log(calculate.evaluate('2 * 3')) // 5
console.log(calculate.evaluate('2 - 3 - 4')) // -5
// console.log(calculate.evaluate('10 * 5 / 2')) // 25