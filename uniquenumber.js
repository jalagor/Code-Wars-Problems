// There is an array with some numbers. 
// All numbers are equal except for one. Return the unique number. 
// Think about performance. 
const { performance } = require('perf_hooks')

const edgeCase = [1].concat(Array.from({ length: 6000 },(e)=>57349))
const numbers = Array.from({ length: 3000 },(e)=>57349).concat([2]).concat(Array.from({ length: 3000 },(e)=>57349))
let t0 = performance.now();

function findUniq(arr) {
    const solution = arr.filter(number=>{
        return arr[0] == arr[1]
        ? (number !== arr[0] && number !== arr[1]) 
        : (number !== arr[2] && number !== arr[3])
    })
    return solution[0]
}


 
console.log(findUniq(edgeCase))
var t1 = performance.now();

console.log("findUniq took " + (t1 - t0) + " milliseconds.");