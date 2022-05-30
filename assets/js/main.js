// Cau 2
// const obj = { foo: 1 };
// obj.bar = 2;

// Cau 3
// function foo (input) {
//   let a = 100;
//   if (input) {
//     let b = a + 1;
//     var c = a + 1;
//   }
//   console.log(b);
//   console.log(c);
// }
// foo (true);

// // cau 5
// function mystery(...param) {
//   return param
// }
// let a = mystery(1,23,4);
// console.log(a);

// // cau 6
// const array = [1, 2, 3]
// const extentions = [4, 5, 6]
// const newArray = [...array, ...extentions]
// console.log(newArray);

// cau 10
// const arr = ['one', 'two', 'three', 'four', 'five'];
// const groupByLength = () => {
//   let result = {};
//   arr.map(item => {
//     if (result[item.length]) {
//       result[item.length] = [...result[item.length],item];
//     }
//     if (!result[item.length]){
//       result[item.length] = [item];
//     }
//   })
//   console.log(result);
// }
// groupByLength();