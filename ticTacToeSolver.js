// If we were to set up a Tic-Tac-Toe game, we would want to know whether the board's current state is solved, wouldn't we? Our goal is to create a function that will check that for us!

// Assume that the board comes in the form of a 3x3 array, where the value is 0 if a spot is empty, 1 if it is an "X", or 2 if it is an "O", like so:

// [[0, 0, 1],
//  [0, 1, 2],
//  [2, 1, 0]]
// We want our function to return:

// -1 if the board is not yet finished (there are empty spots),
// 1 if "X" won,
// 2 if "O" won,
// 0 if it's a cat's game (i.e. a draw).
// You may assume that the board passed in is valid in the context of a game of Tic-Tac-Toe. 
 
function isSolved(board){

}

let a = [
    [1, 0, 2],
    [1, 2, 0],
    [0, 0, 0]
]
let b = [
    [1, 2, 1],
    [2, 2, 1],
    [1, 1, 2]
]
let c = [
    [1, 2, 2],
    [2, 2, 0],
    [1, 1, 1]
]
let d = [
    [0, 0, 2],
    [1, 1, 2],
    [2, 1, 2]
]

console.log(isSolved(a)) // -1
console.log(isSolved(b)) // 0
console.log(isSolved(c)) // 1
console.log(isSolved(d)) // 2
