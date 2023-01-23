/*let person ={
    firstname:"dileep",
    lastname :"yandamuri",
    age:null
}
console.log(typeof(person.firstname))*/
// console.log()
//console.log(Boolean(NaN))
//let a=false
//let b= true
//console.log(a==b)
//console.log(a===b)//
//const numarray=[1,2,3,4,5]
//for(const num of numarray){
  //  console.log("itteration number" +num)
//}
// function greet(){
//     console.log('goodmorning dileep')
// }
// greet()
// function greet(username){
//     console.log("good morning " + username)   
// }
// greet("dileep")
// greet("kumar")
// greet("abhishek")
// function greet(username){
//     console.log("good morning " + username)   
// }
// greet("dileep","kumar","abhishek")
// let sum=(a,b)=>a+b
// const add=sum(10,20)
// console.log(add)
// let sum1=(a,b)=>a-b
// let add=sum1(15,50)
// console.log(add)
// let mynum=20
// if (true){
//     var name= 'abhishek';
//     console.log(name);
//     console.log(mynum)
//  }
// function testfn(){
//     let name=" dileep"
//     console.log(name)
//     console.log(mynum)
// }
// testfn()

// advanced java script
// let a=20
// function outer(){
//     let b=10
//     function inner(){
//         let c=20
//         console.log(a,b,c)
//     }
//     inner()
// }
// outer()
// function add(a,b){
//     return a+b
//  }
//  c=add(10,15)
//  console.log(c)
function outer(){
    let counter=0
    function inner(){
        counter++
        console.log(counter)
    }
    inner()
}
outer()
outer()
