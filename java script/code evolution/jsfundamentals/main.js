// console.log("hello from js");
// comments will be given using the //

//variables

// let age = 25
// const sal = 85000
// console.log(age);
// console.log(sal);
// sal = 25000

// age = 29
// age = 26
// console.log(age);
// age = 30
// console.log(age);

// Data Types
// string type

// const name = "dileep";
// const language = " java script";
// const channel = " code evolution";
// console.log(name, language, channel);
// //number type
// const total = 0;
// const PI = 3.14;
//boolean type

// const primary = true;
// const secondary = false;
// console.log(primary);
// console.log(secondary);

// //undefined
// let result;
// console.log(result);
// //null type
// const res = null;
// console.log(res);

//object type

// it is used to write the collection of data

// object is the collection of key value pairs

// let emp = {
//   firstname: "dileep",
//   age: 24,
//   sal: 55000,
// };

// console.log(emp);

// // we can read the object key value pairs by using the dot notation

// console.log(emp.firstname);

// // arrays

// let sal = [15000, 20000, 25000, 30000];

// console.log(sal);
// console.log(sal[0]);
// var a = 100;
// var a = "dileep";
// var a = "king";
// console.log(a);
// while logging a variable which is last assaigned will be given as output

//                                            operators

// assaignment operator
// var a = 10;
// var b = 20;
// airthametic operations
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);
// console.log(a % b);
// console.log(a++);
// console.log(a--);
// console.log(++a);
// console.log(--b);

// comparison operators
// it gives the true or false value

// var a = 10;
// var b = 20;
// console.log(a === b);
// console.log(a != b);
// console.log("sai" + " dileep");

// var a = 10;
// console.log(++a);
// console.log(--a);
// // type of is used to get the datatype of the variable
// console.log(typeof b);
// var b = "dileep";
// console.log(a + b);

// type conversion

// console.log(40 + "30");
// console.log(true + "10");
// console.log("9" + false);
// console.log("10" - false);
// console.log("10" - true);
// console.log(5 + undefined);
// console.log(5 + null);
// console.log((500).toString());
// console.log(Boolean(undefined));

// console.log(parseInt("dileep"));

//boolean global method to convert the type

// console.log(Boolean("dileep "));

//  equality

// var a = undefined;
// var b = null;
// console.log(a == b);
// console.log(a === b);

// conditional statements

// if statement

// let a = 10;
// if (a > 0) {
//   console.log("a is positive number");
// }

// if else statement

// let a = -10;
// if (a > 0) {
//   console.log("a is positive number");
// } else {
//   console.log("a is negative");
// }
// else if statement
// let a = 0;
// if (a > 0) {
//   console.log("a is positive number");
// } else if (a < 0) {
//   console.log("a is negative");
// } else {
//   console.log("a is zero");
// }

// switch statement

// let color = "blue";
// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   case "green":
//     console.log("color is green");
//     break;
//   case "yellow":
//     console.log("color is yellow");
//     break;
//   case "violet":
//     console.log("color is violet");
//     break;

//   default:
//     console.log("not a valid color");
//     break;
// }

// itterative loops

// for (i = 1; i <= 5; i++) {
//   console.log("Itterative " + i);
// }

// let i = 1;
// while (i <= 5) {
//   console.log("Itterative " + i);
//   i++;
// }

// i = 1;
// do {
//   console.log("Itterative " + i);
//   i++;
// } while (i <= 5);

// for of loop

// var ids = [101, 102, 103, 104];
// for (id of ids) {
//   console.log(id);
// }

// functions

// function greet() {
//   console.log("good morning dileep");
// }
// greet();
// function greet(name) {
//   console.log("good morning " + name);
// }
// greet("Prem");
// greet("kumar");
// greet("yandamuri");

// function with return type

// function add(a, b) {
//   return a + b;
// }
// var sum = add(10, 20);
// console.log(sum);

// let add = (a, b) => {
//   console.log(a + b);
// };
// add(10,20);

// let add = (a, b) => a + b;
// var sum = add(10, 20);
// console.log(sum);
// var addfive = (num) => num + 5;
// var sum = addfive(10);
// console.log(sum);

// // Block scope
// if (true) {
//   var myname = "dileep";
// }
// console.log(myname);

// // functional scope

// function testFn() {
//   const myname = "king";
// }
// console.log(myname);
// testFn();

// global scope
const num = 10;
if (true) {
  const num = 200;
  var myname = "dileep";
  console.log(myname);
  console.log(num);
}

function testFn() {
  const num = 100;
  const myname = "king";
  console.log(myname);
  console.log(num);
}
testFn();
