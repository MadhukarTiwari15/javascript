let number = 67

console.log(typeof (number))

let age = "89"

console.log(typeof(age))


// convert to number
let valueInNumber = Number(age)

console.log(valueInNumber)
console.log(typeof (valueInNumber))

//convert to string
let valueInString = String(number)

console.log(valueInString)
console.log(typeof(valueInString))

let score = "88jj"
console.log(typeof(score))
let score2 = Number(score)
console.log(typeof(score2))
console.log(score2)                 // NaN


let time = null
console.log(typeof(time))
let time2 = Number(time)
console.log(typeof(time))
console.log(time2)                 // 0

let date = undefined
console.log(typeof(date))
let date2 = Number(date)
console.log(typeof(date2))
console.log(date2)     // NaN

let month = "january"
console.log(typeof(month))
let month2 = Number(month)
console.log(typeof(month2))
console.log(month2)     // Nan


let loggedIn = "hello"
console.log(typeof(loggedIn))
let booleanIsLoggedIn = Boolean(loggedIn)
console.log(typeof(booleanIsLoggedIn))
console.log(booleanIsLoggedIn)



// "33" => 33
// "33acd" => NaN
// true => 0, false => 1
// "month" => NaN 