// Nested  function scope

// let a = 10;
// function outer() {
//   let b = 30;
//   function inner() {
//     let c = 50;
//     console.log(a, b, c);
//   }
//   inner();
// }
// outer();

// closures

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   inner();
//   inner();
// }
// outer();

// function outer() {
//   let counter = 0;
//   function inner() {
//     counter++;
//     console.log(counter);
//   }
//   return inner;
// }
// const fn = outer();
// fn();
// fn();

// this keyword

// function saymyname(name) {
//   console.log(`my name is ${name}`);
// }
// saymyname("dileep");
// saymyname("walter white");

//implicit binding

// const person = {
//   name: "dileep",
//   SayMyName: function () {
//     console.log(`my name is ${this.name}`);
//   },
// };
// person.SayMyName();

// explicit binding
// const person = {
//   name: "yandamuri",
// };
// function SayMyName() {
//   console.log(`my name is ${this.name}`);
// }
// SayMyName.call(person);

// new binding

// function person(name) {
//   this.name = name;
// }
// const p1 = new person("dileep");
// const p2 = new person("prem");
// console.log(p1.name);
// console.log(p2.name);

// Default binding
// function saymyname(name) {
//     console.log(`my name is ${this.name}`);
//   }
//   saymyname();

// name = "prem";
// function saymyname(name) {
//   console.log(`my name is ${this.name}`);
// }
// saymyname();
