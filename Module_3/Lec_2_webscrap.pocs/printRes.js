const request = require('request');
const fs = require('fs');
const jsdom = require('jsdom');
let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard";

request(url, cb);
console.log('Before');
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message);
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        console.log("content recieved");
        // console.log(body);
        extractData(body);
    }
}

function extractData(html) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM
    let dom = new JSDOM(html);
    // document represent the whole html page
    let document = dom.window.document;
    // using document and your selectors you find element in html page p span
    let firstButton = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-auto");
    // let content = firstButton[8].textContent;
    console.log(firstButton.length);
    // let AllTables = document.querySelectorAll(".ds-w-full.ds-table.ds-table-xs.ds-table-auto ");
    // console.log(AllTables.length);
}