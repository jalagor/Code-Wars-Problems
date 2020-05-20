// Your task, is to create a NxN spiral with a given size.

// For example, spiral with size 5 should look like this:

// 11111
// ....1
// 111.1
// 1...1
// 11111
// and with the size 10:

// 1111111111
// .........1
// 11111111.1
// 1......1.1
// 1.1111.1.1
// 1.1..1.1.1
// 1.1....1.1
// 1.111111.1
// 1........1
// 1111111111
// Return value should contain array of arrays, of 0 and 1, for example for given size 5 result should be:

// [[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]  
 
function makeSpiral(size){
    let spiral = Array.from({length: size}, (v, i) => Array.from({length: size}, (v, i) => 1) )

    for(i=1; i< size-1; i++){
        if(i == 1){
            for(let j = 0; j<size-1; j++){
            spiral[i][j] = 0
            }
        } 
        spiral[i][size - 2] = 0

        if(i == (size-2)){
            for(let j = 1; j<size-1; j++){
                spiral[i][j] = 0
            }
        }
    }
    return spiral
}

console.log( makeSpiral(7) )  
  
  
// rules: 
// spiral[0] and spiral[n] will always remain unchanged, exclude them from loop
// spiral[1] elements will change 1 to 0 in elements up to spiral[1][N-1]
// spiral[N][N-1] will change from 1 to 0 
// penultimate array elements, exclding first and lsat, will change to 0 
