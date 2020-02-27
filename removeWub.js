// Write a function that takes in a string and returns that string with all 
// instances of WUB replaced with spaces.  
//  ex: songDecoder("WUBBOHEMIANWUBRHAPSODY") // "BOHEMIAN RHAPSODY" 


function songDecoder(song){
    return song.replace(/(WUB)+/g," ").trim()
}
console.log(songDecoder('WUBAWUBBWUBC'))