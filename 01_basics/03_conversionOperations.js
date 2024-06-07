// let number = 67

// console.log(typeof (number))

// let age = "89"

// console.log(typeof(age))


// // convert to number
// let valueInNumber = Number(age)

// console.log(valueInNumber)
// console.log(typeof (valueInNumber))

// //convert to string
// let valueInString = String(number)

// console.log(valueInString)
// console.log(typeof(valueInString))

// let score = "88jj"
// console.log(typeof(score))
// let score2 = Number(score)
// console.log(typeof(score2))
// console.log(score2)                 // NaN


// let time = null
// console.log(typeof(time))
// let time2 = Number(time)
// console.log(typeof(time))
// console.log(time2)                 // 0

// let date = undefined
// console.log(typeof(date))
// let date2 = Number(date)
// console.log(typeof(date2))
// console.log(date2)     // NaN

// let month = "january"
// console.log(typeof(month))
// let month2 = Number(month)
// console.log(typeof(month2))
// console.log(month2)     // Nan


// let loggedIn = "hello"
// console.log(typeof(loggedIn))
// let booleanIsLoggedIn = Boolean(loggedIn)
// console.log(typeof(booleanIsLoggedIn))
// console.log(booleanIsLoggedIn)



// "33" => 33
// "33acd" => NaN
// true => 0, false => 1
// "month" => NaN 





/*   **************************operations *********************** */

let value = 6
let negValue = -value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(3/2)
// console.log(5%2)

// str1 = "hello"
// str2 = "world"
// console.log(str1 + str2)
// console.log(1 + 2)
// console.log("1" + 2)
// console.log(typeof("1" + 2))
// console.log(1 + "3")
// console.log(typeof(1 + "3"))
// console.log("1" + 2 + 3)
// console.log(typeof("1" + 2 + 3))
// console.log( 1 + 2 + "3")


// console.log(true)
// console.log(+true)


// In JavaScript, when the plus operator
//  is placed between a number and a boolean, 
//  the boolean is coerced (converted) into a number.

//console.log ( 3 + true)

// in javascript - before the string treat the string as no 
// console.log(-"50" + 50)
// console.log(50 -"50")

// When JavaScript fails to coerce a number
//  in the example below, we are left with NaN (Not A Number).

// console.log(-"mad" + 70)  //NaN bacause javascript wont be able to turn mad into a number

/* prefix and postfix */

// prefix (x++) incremet the operand but does not give increment value

// postfix ( ++x ) increment the operand and gives increment value


//prefix (x++)

let x = 2
let y = x++
   
console.log(y)     // isme x++ karne se x = 3 hogya hai but y ko ni mia

console.log(x)     // isme x++ hua tha eqtn m "y = x++" to x ki value ki 3 ho gi hain

//hence proved x++ increment the operand but does not give the increment value.

// postfix (++x)

let a = 3
let b = ++a
console.log(b)    // isme incremnt hui value ++a karne se or assing bhi ho gi hain

console.log(a)   // ++a karne se increment ho gii hain value

// hence proved ++a postfix, increment the operand and assing the value.