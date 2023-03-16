const fs = require("fs");
// console.log("Before");

// fs.readFile("f1.txt", cb);

// function cb(err, data) {
//     if (err) {
//         console.log("err", err);
//     } else {
//         console.log("content" + data);
//     }
// }

// console.log("After");

// Promises
// async await

// ***************SETTIMEOUT EXAMPLE*****************
// function myfn() {
//     console.log("I ma myfn");
// }
// console.log("before");
// setTimeout(myfn,2000);
// console.log("after");

//****************Promisese example******************
// console.log("Before");
// let Promises = fs.promises.readFile("f1.txt");
// console.log("Promise before", Promises); 
// console.log("after");

// function myfn() {
//     console.log("line number 34", Promises);
// }
// setTimeout(myfn,2000);


// what is async function ??
// await only valid in async function
async function myfn() {

    console.log("Before");
    let Promises = fs.promises.readFile("f1.txt");
    console.log("Promise before", Promises);
    console.log("after");
    // it stops the myfn function till promise is fullfilled
    // and return value of that promise
    let value = await Promises;
    console.log(value + "");

}

myfn();
