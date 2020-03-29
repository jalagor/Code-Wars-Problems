// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// The input numbers are *big*.
// The input is a string of only digits
// The numbers are positives

function add(str1, str2) {
    let sum = "";  
    let str1Length = str1.length;
    let str2Length = str2.length;
    
    if(str2Length > str1Length ){
        let temp = str2;
        str2 = str1;
        str1 = temp;
    }

    let carry = 0; 
    let a, b, temp, digitSum;
    for (let i = 0; i < str1.length; i++) {
        a = parseInt(str1.charAt(str1.length - 1 - i));      
        b = parseInt(str2.charAt(str2.length - 1 - i));     
        b = (b) ? b : 0;                                    
        temp = (carry + a + b).toString();                  
        digitSum = temp.charAt(temp.length - 1);           
        carry = parseInt(temp.substr(0, temp.length - 1)); 
        carry = (carry) ? carry : 0;                      

        sum = (i === str1.length - 1) ? temp + sum : digitSum + sum;
    }
    return sum;
}   

let num1 = '8593763827626485960'
let num2 = '4375991740626485960'
let num3 = '1073458626964432860'
let num4 = '7539213827628690460'
  

   
console.log('first', add(num1, num2))  // 12969755568252971920
console.log('second', add(num2, num3)) // 5449450367590918820
console.log('third', add(num1, num4)) // 16132977655255176420
console.log('fourth', add(num4, num2)) // 11915205568255176420
