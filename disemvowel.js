// Write a function that takes in a string, and returns that string
//      without any vowels.


function disemvowel(str) {

    var vowels = ['a', 'e', 'i', 'o', 'u']

    var newStr = str.split('').filter(letter => {
        return !vowels.includes( letter.toLowerCase() ) ? letter : null;
    })

    return newStr.join('');
}


console.log( disemvowel("I've got NO vowels, to HOLD me down") )