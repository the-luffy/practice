const request = require('request');
const fs = require('fs');
const jsdom = require('jsdom');
let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/match-schedule-fixtures-and-results";

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
    let AllMatch = document.querySelectorAll(".ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent .ds-no-tap-higlight");
    console.log(AllMatch.length);
    for (let i = 0,j = 1; j <=74 ,i < AllMatch.length; i=i+6,j++) {
        let link = AllMatch[i].getAttribute("href");
        let fullLink = "https://www.espncricinfo.com" + link;
        console.log(j + " " + fullLink);
        // console.log(" ");
        request(fullLink,bcb);
        
    }
}


