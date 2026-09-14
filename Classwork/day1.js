// //function : block of code
// //syntax:
// // function fname() {
// //}
// //fname();
// function add (num1, num2) {
//     console.log(num1 +num2)
// }
// add (65,4)

// const add1=()=> {
//     console.log("arrow return function")
// }
// add1();

// const add2=(num1, num2)=> {
//     return num1 + num2;

// }
// console.log(add2(2,1));


function addNum() {
    console.log(arguments);
}

addNum(2,1,2,3,4,2,5,6);