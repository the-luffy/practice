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

function extractData(body) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM
    let dom = new JSDOM(body);
    // document represent the whole html page
    let document = dom.window.document;
    // using document and your selectors you find element in html page p span
    let firstButton = document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto");
    console.log(firstButton.length);
    let content = firstButton[1]; // bowling table 2
    let content2 = firstButton[3]; // bowling table 4
    // element -> ke ander jo bhi html wo inner html se aa jayegi
    let newHtmlString = "<table>" + content.innerHTML + "</table>" + "<table>" + content2.innerHTML + "</table>";
    fs.writeFileSync("table.html", newHtmlString);
    // console.log(newHtmlString);
    getDataFromBowlingTable(newHtmlString);

}

function getDataFromBowlingTable(newHtmlString) {
    const JSDOM = jsdom.JSDOM;
    // pass to newJSDOM
    let dom = new JSDOM(newHtmlString);
    // document represent the whole html page
    let document = dom.window.document;

    let allRows = document.querySelectorAll("tbody tr td.ds-flex.ds-items-center");
    console.log(allRows.length);

    for (let i = 0; i < allRows.length; i++) {
        let content = allRows[i].textContent;
        let allRows2 = document.querySelectorAll(".ds-w-0.ds-whitespace-nowrap.ds-text-right strong");
        let content2 = allRows2[i].textContent;
        console.log(content + " " + content2);
    }
}