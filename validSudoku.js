// write a function that takes a 9x9 array of arrays, and returns true if the matrix 
// represents a correctly solved sudoku board. single digit integers are the only valid elements. 
// rules for a solved board:  
// each column and row must contain 1-9 exactly once
// each of the 9 3x3 blocks must contain 1-9 exactly once 
// 0 represents an empty square on the board, board's must not contain empty squares 

function validSolution(board){
    for(let y = 0; y < 9; y++){
        let sumColumn = 0, sumRow = 0;

        for(let x = 0; x < 9; x++){
            sumColumn += board[x][y]
            sumRow += board[y][x]
        }
        if(sumColumn !== 45 || sumRow !== 45){return false}
    }

    for(let i = 0; i < 9 ;i+=3){
        for(let j = 0; j<9; j += 3){
            let block = 0;
           
            for(let k = 0; k<3; k++){
                block += board[i+k][j] += board[i+k][j+1] += board[i+k][j+2]
            }
            if(block !== 45){return false}
        }
    }
    return true
}

let trueBoard = [
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]
console.log( validSolution(trueBoard) )
