// let date = new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toLocaleString())


// in javascript month start from 0
// also other ways to declare days
let mydate = new Date(2023,0,5)
// console.log(mydate.toDateString())


// timestamp
// ye ek fix time period se abhi ke date tak ka time difference deta hain
let mystamp = Date.now
console.log(mystamp().toLocaleString())
console.log(mydate.getTime())
console.log(mydate.getMonth())

