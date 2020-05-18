// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 00000
// ....0
// 000.0
// 0...0
// 00000
// and with the size 10:

// 0000000000
// .........0
// 00000000.0
// 0......0.0
// 0.0000.0.0
// 0.0..0.0.0
// 0.0....0.0
// 0.000000.0
// 0........0
// 0000000000
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]  
 
function makeSpiral(size){
    let spiral = Array.from({length: size}, (v, i) => Array.from({length: size}, (v, i) => 1) )


    return spiral
}

console.log( makeSpiral(5) )  
  
  
// rules: 
// spiral[0] and spiral[n] will always remain unchanged
// spiral[1] will change 1 to 0 in elements up to spiral[1][N-1]..
