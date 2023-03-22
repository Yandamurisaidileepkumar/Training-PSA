function sum(a, b, c) {
  return a + b + c;
}
console.log(sum(10, 20, 30));
// sum (a,b,c) => curried function sum(a)(b)(c)
function curry(fn) {
  //   return function (a) {
  //     return function (b) {
  //       return function (c) {
  return a * b * c;
}
//     };
//   };
// }
const curriedsum = curry(sum);
console.log(curriedsum(10)(30)(40));
