// npm i jsdom
const fs = require('fs');
let htmlContent =fs.readFileSync("sample.html", "utf-8");

const jsdom = require('jsdom');
const JSDOM = jsdom.JSDOM;//no meaning
//1. string form me -> html content provide
// pass to newJSDOM
let dom = new JSDOM(htmlContent);
// 2. no meaning
let document = dom.window.document;

//3. logic -> help to get your html element 
//if you pass a selector
//css selector -> first occurence of that html element
// document.querySelector("p");
//css selector -> all the occurence of that html element
// const allPs = document.querySelectorAll("p");
// console.log(allPs.length);
// // content ->
let firstPkacontent = allPs[0].textContent;
console.log("first P ka content",firstPkacontent);
let secondPkacontent = allPs[1].textContent;
console.log("first P ka content",secondPkacontent);
const allidWalaElem = document.querySelectorAll("#unique");
let content = allidWalaElem[0].textContent;
console.log(content);
