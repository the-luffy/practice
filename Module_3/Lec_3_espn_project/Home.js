const request = require('request');
const fs = require('fs');
const path = require("path");
const jsdom = require('jsdom');
const allMatchPageObj = require("./matchLink");
const helperObj = require("./helper");
let url = "https://www.espncricinfo.com/series/ipl-2021-1249214";

let iplPath = path.join(__dirname, "ipl");
helperObj.dirCreater(iplPath);
request(url, cb);
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
    let matchLink = document.querySelectorAll(".ds-flex.ds-text-title-xs.ds-items-center a");
    let href =matchLink[1].getAttribute("href");

    let link = "https://www.espncricinfo.com" + href;
    // console.log(link);
    allMatchPageObj.AllMatchFn(link);

}