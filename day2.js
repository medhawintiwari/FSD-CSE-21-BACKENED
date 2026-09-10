//synchronous and asynchronous programming
//synchronous- step by step, but wait for one function to finish
//asynchronous- line by line but doesnt wait, the other code runs 

//sync 
// console.log("javascript");
// function hello() {
//     console.log ("hello, world!");
// }
// hello ();
// console.log("this is sync programming")


//async
// const hello = () => {
//     setTimeout(() => {
//         console.log("hellow,world!");
//     }, 2000);
// }
// hello();
// console.log("this is async programming")


//callback, promises, async/await


// function add(n1, n2, callback, pn) {
//     console.log(n1 +n2);
//     callback();
//     pn();
// }
// let a=10;
// let b=59;
// add(a,b,sayHi)

// function sayHi() {
//     console.log("this is callback function");
// }

// function pn() {
//     console.log("Public Notice!")
// }
// add(a,b, sayHi, pn);


//create a function display(callback) that prints "welcome to ABES", then call callback which print "learning fsd in cse21"

function display(learn) {
    console.log("welcome to abes");
    learn();
}

function learn() {
    console.log("learning fsd  in cse21");
}
display(learn);