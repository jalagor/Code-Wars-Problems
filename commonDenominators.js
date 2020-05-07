// Write a function that takes an array consisting of arrays whose elements are a pair of positive integers(nominators and denmoninators), 
// and returns a similarly formatted sting, with the corresponding pairs being of equal value to the previous pairs, 
// using the Least Common Denominator of the initial denominators. 

// let array = [ [1, 2], [1, 3], [1, 4] ]
// convertFrac(array) returns "(6,12)(4,12)(3,12)"

function convertFrac(lst){
    let fractions = [], denoms = [], LCD, result = ''
    
    for(let i = 0; i < lst.length; i++){
        fractions.push(lst[i][0]/lst[i][1])
        denoms.push(lst[i][1])
    }
    lst[1] ? LCD = denoms.reduce(lcm) : null
    for(let i = 0; i < fractions.length; i++){
        result += `(${Math.round(fractions[i]*LCD)},${LCD})`
    }
    return result
}

function gcd(a,b){
    let t = 0
    a < b && (t = b, b = a, a = t) 
    t = a%b
    return t ? gcd(b,t) : b
}
  
function lcm(a,b){
    return a/gcd(a,b)*b
}

let array = [ [1, 2], [1, 3], [1, 4] ]
console.log(convertFrac(array))