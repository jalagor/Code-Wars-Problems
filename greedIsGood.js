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
  let points = 0 
  let diValues = {1:0, 2:0, 3:0, 4:0, 5:0, 6:0}
  dice.map(di => diValues[di] += 1 )

  for( let i = 1; i <= 6; i++ ){
     scoreTriples(diValues, i) ? (points +=(100*i)) && (diValues[i] -= 3) : null
     scoreTripleOnes(points, i) ? points = 1000 : null  
     i === 1 ? points += (diValues[i]*100)
     : i === 5 ?  points += (diValues[i]*50)
     : null
  }
  return points
}

function scoreTriples(object, x){
  return  object[x] >= 3  ? true : false
}

function scoreTripleOnes(total, x){
  return (total === 100 && x === 1) ? true : false
}






let rolls = [1,1,1,1,1]
console.log(score(rolls))