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
// penultimate array elements, exclding first and lsat, will change to 0  
// the pattern seems to be 0 => N-1, just N-1, increment to 1 => N-3 + N-1, 1 + N-3 + N-1 
// a loop that with an if statement that determines odd/even(?, this may need more testing), and carries out setting verses looping
// this would point to 3 incrementers minimum, outermost for hitting each array, secondary for each element in the array 
//          third for setting the next spiral boundry (N-1, N-3, etc.)