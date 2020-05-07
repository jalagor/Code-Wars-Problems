// Write a function that determines whether or not a number is  perfect power. 
// If the given number is a perfect power, return it's exponent and base. If the integer is not a perfect power, return null. 

// isPP(81)  should return [9, 2]
 

var isPP = function(n){
    var base = 2,
    exponent = 2,
    max = Math.floor( n / 2 );

    while ( base <= max ) {
        exponent = 2;
        while ( Math.pow( base, exponent ) <= n ) {
            if ( n === Math.pow( base, exponent ) ) {
                return [ base, exponent ];
            } else {
                exponent += 1;
            }
        }
        base += 1;
    }
    return null;
}  

 
console.log(isPP(81))