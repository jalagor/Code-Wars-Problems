// Create a simple calculator that given a string of operators (), +, -, *, / 
//  and numbers separated by spaces returns the value of that expression

// Example:

// Calculator().evaluate("2 / 2 + 3 * 4 - 6") # => 7  
 
 
const Calculator = function() {
    this.evaluate = string => { 
        let result 
        
        return result
    }
};   
 
const operations = {
    '+': (num1, num2) => { return num1 += num2 }, 
    '-': (num1, num2) => { return num1 -= num2 }, 
    '*': (num1, num2) => { return num1 *= num2 }, 
    '/': (num1, num2) => { return num1 /= num2 }
}