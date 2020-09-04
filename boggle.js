/* Write a function that determines whether a string is a valid guess in a Boggle board, 
as per the rules of Boggle. A Boggle board is a 2D array of individual characters. 
Valid guesses are strings which can be formed by connecting adjacent cells 
(horizontally, vertically, or diagonally) without re-using any previously used cells. 
Your function should take two arguments (a 2D array and a string) and return true or 
false depending on whether the string is found in the array as per Boggle rules.
Test cases will provide various array and string sizes (squared arrays up to 150x150 
and strings up to 150 uppercase letters). You do not have to check whether the string 
is a real word or not, only if it's a valid guess.*/  



// needs: find starting point in board with first letter, check for multiple instances of starting point, 
// store potential coordinates, check adjacent coordinates for next letter, 
// if found: remove initial coordinate from board && repeat adjacency check; return true if last letter is matched, 
// else no match: check next potential starting point and repeat adjacency check 
// else no starting points return false 

function checkWord( board, word ) {

}

const boggle = [
    ["I","L","A","W"],
    ["B","N","G","E"],
    ["I","U","A","O"],
    ["A","S","R","L"]
], bingo = "BINGO"  


 
console.log( checkWord( boggle, bingo ) ) 