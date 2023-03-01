// npm i jsdom
const jsdom = require('jsdom');
const fs = require('fs');
const JSDOM = jsdom.JSDOM;

let htmlContent =fs.readFileSync("sample.html", "utf-8");
let dom = new JSDOM(htmlContent);
let document = dom.window.document;



//3. logic -> help to get your html element if you pass a selector
document.querySelector();
