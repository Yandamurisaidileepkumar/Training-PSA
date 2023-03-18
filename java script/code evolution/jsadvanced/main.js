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
