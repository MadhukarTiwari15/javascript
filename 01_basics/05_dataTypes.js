//  (call by value) primitive

// 7 types - String, Number, Boolean , BigInt , Null , Undefinde , Symbol

const bigNumber = 983457290834750293485n

const id = Symbol('124')

// refrence type ( non - primitive)
// objects, Array, Functions

const heros = ["shaktiman","ironman"];

//object
let myObj = {
    name: "madhukar",
    age: 123
}


// const fun = function(){
//     console.log("hello")
// }

// JavaScript is a dynamically typed language, which means that data types of
//  variables are determined by the value they hold at runtime and can change 
//  throughout the program as we assign different values to them

// primitive - stack 
// refrence - heap ( here the object take refrence, for )

// ex :
let user1 = {
    name: "madhuakr",
    email: "tiwari@gmail.com"
}

let user2 =  user1
user2.email = "madhukar@gmail"
console.log(user1.email)