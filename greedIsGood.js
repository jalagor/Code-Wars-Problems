// write a function that takes in an array of 5 six-sided dice and scores the roll based on the following chart: 
// Three 1's => 1000 points
//  Three 6's =>  600 points
//  Three 5's =>  500 points
//  Three 4's =>  400 points
//  Three 3's =>  300 points
//  Three 2's =>  200 points
//  One   1   =>  100 points
//  One   5   =>   50 point
// each di should only be counted once 
 
function score( dice ) {
    let diValues = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
    dice.map(di => diValues[di] += 1 )
    // let diValues = dice.sort().join('')
    let points = 0 

    
    
    // diValues.includes('111') ? points += 1000 :
    // diValues.includes('222') ? points += 200 :
    // diValues.includes('333') ? points += 300 :
    // diValues.includes('444') ? points += 400 :
    // diValues.includes('555') ? points += 500 :
    // diValues.includes('666') ? points += 600 :
    // null 

    // diValues.match(/\d{3}/) ? : null
   console.log(diValues)
    return points
    
    
  }

  let rolls = [6,1,1,5,2]
  console.log(score(rolls))