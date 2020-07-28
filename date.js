// not actually a codewars problem, 
// I'm using it for a pickup line. 

// let john = {
//     'Hobbies': ['ski', 'hike', 'camping', 'coding', 'cooking', 'fishing'], 
//     'Artists': ['RHCP', 'The Beatles', 'Led Zeppelin', 'CCR'], 
//     'Animal Preference': 'dog'
// }

// let kate = {
//     'Hobbies': ['ski', 'hike', 'camping', 'scuba dive', 'dirt bike'], 
//     'Artists': ['RHCP', 'The Beatles', 'Led Zeppelin', 'CCR'], 
//     'Animal Preference': 'dog'
// }

// function swipeRight(name1, name2){
//     let similarities = name1['Hobbies'].filter(hobby => name2['Hobbies'].includes(hobby))
//     return similarities.length >= (name1['Hobbies'].length / 2 ) ? 'go for it!' : 'hmmm'
// }


let john = {'mood': 50}, mood = john['mood'];

let tellJoke = () => mood > 0 ? (mood-- && tellJoke()) : 'crying'

console.log( tellJoke() )


// console.log( swipeRight(john, kate) )