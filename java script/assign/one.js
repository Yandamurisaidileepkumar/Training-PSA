//check if a number is divisible by 7
// var a=50

// if(a%7==0){
//     console.log("divisible by 7")

// }
// else{
//     console.log("not divisible by 7")
// }

// let emp={
//     id:101,
//     name:"dileep"
// }
// document.write(JSON.stringify(emp))
// let a=[]
// let b=[10,20,30]
// if(b.length>0){
//     console.log(" not empty array")

// }
// else{
//     console.log(" empty array")
// }
// console.log(b.length>0?("not empty array"):(" an empty array"))

// let a ={
//     $:"dileep"
// }
// console.log(a)

// function outer(){
//     let counter=0
//     function inner(){
//         counter++
//         console.log(counter)
//     }
//      inner()
// }
// outer()
// outer()
// function sum(a,b,c){
//     return a+b+c
// }
// function curry(fn){
//      return function (a){
//         return function(b){
//             return function (c){
//                 return fn(a,b,c)
//             }
//         }
//      }
// }

// let curriedsum= curry(sum)
// console.log(curriedsum (10)(20)(30))
function sum(a) {
    return function (b) {
        return function (c) {
            return a + b + c
        }
    }
}
console.log(sum(10)(20)(40))