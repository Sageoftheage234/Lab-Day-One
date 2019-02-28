let yourName = prompt('What is your name champ?')
let yourFavoriteColor = prompt('What is your favorite color?')
let yourFavoriteNumber = prompt('What is your favorite number?')
let yourFavoriteVacation = prompt('What is your favorite vacation destination?')
confirm(`Very nice, ${yourName}. So your favorite color is ${yourFavoriteColor} and your favorite number is ${yourFavoriteNumber} and your favorite vacaction spot is ${yourFavoriteVacation}?`)
//

console.log(`${yourName} your favorite color is ${yourFavoriteColor} and your favorite number is ${yourFavoriteNumber} and your favorite vacation spot is ${yourFavoriteVacation}?`)


let elName = document.getElementById('name');
elName.innerHTML = `${yourName}`

let elColor = document.getElementById('color');
elColor.innerHTML = `${yourFavoriteColor}`

let elNumber = document.getElementById('number')
elNumber.innerHTML = `${yourFavoriteNumber}`

let elVacation = document.getElementById('vacation')
elVacation.innerHTML = `${yourFavoriteVacation}`
