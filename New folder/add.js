// // bai 2
// var x = 2,
// fns = [];
// (function() {
// var x = 5;
// for (var i = 0; i < x; i++) {
// // ..
// }
//  })();
// // DO NOT MODIFY BELOW CODE
// console.log(x * 2 === fns[x * 2]());
// // true
    

// Bài 5

// function upper(strings, ...values) {
//     return strings.toUpperCase();
//   }
//   var name = "Nguyen Van A",
//     account = "ANV",
//     classname = "Fresher FrontEnd";
  
//   console.log(
//     `Hello ${upper(name)} (@${upper(account)}), welcome to the ${upper(
//       classname
//     )}!!!` === "Hello NGUYEN VAN A (@ANV), welcome to the FRESHER FRONTEND!!!"
//   );



function ajax(url, cb) {
     // fake ajax response:
     cb({
     foo: 2,
     baz: [6, 8, 10],
     bam: {
     qux: 12
     }
    });
     }
    
    function check(data) {
     console.log(
     56 ===
     data.foo +
    data.bar +
     data.baz[0] +
     data.baz[1] +
     data.baz[2] +
 data.bam.qux +
    