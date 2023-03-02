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
    let firstButton = document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto");
    let content = firstButton[1]; // bowling table 2
    let content2 = firstButton[3]; // bowling table 4
    // element -> ke ander jo bhi html wo inner html se aa jayegi
    let newHtmlString = "<table>" + content.innerHTML + "</table>" + "<table>" + content2.innerHTML + "</table>";
    // fs.writeFileSync("tables.html", newHtmlString);
    // console.log(newHtmlString);
    getDataFromBowlingTable(newHtmlString);

}

function getDataFromBowlingTable(newHtmlString) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM
    let dom = new JSDOM(newHtmlString);
    // document represent the whole html page
    let document = dom.window.document;

    let allRows = document.querySelectorAll("tbody td.ds-min-w-max.ds-flex.ds-items-center");
    console.log(allRows.length);
}