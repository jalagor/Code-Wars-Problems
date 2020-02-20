//  Given a single string of space separated numbers, 
//      return the highest and lowest number as a string. ex: 'highest lowest'

function highAndLow(numbers){
    var array = numbers.split(" ").map(number => parseInt(number)).sort(function(a, b){return a-b})
    return `${array[array.length - 1]} ${array[0]}`
}

console.log(highAndLow('5, -3, 1000, 100'))