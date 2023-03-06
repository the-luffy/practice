const request = require('request');
const fs = require('fs');
const jsdom = require('jsdom');
const scorecardPageObj = require("./scorecard")
function allMatchPageExecutor(url) {
    request(url, cb);
}

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
    for (let i = 0,j = 1; j <=74 ,i < AllMatch.length; i=i+6,j++) {
        let link = AllMatch[i].getAttribute("href");
        let scorecardLink = "https://www.espncricinfo.com" + link;
        scorecardPageObj.scorecardFn(scorecardLink);
        
        
    }

}

module.exports = {
    AllMatchFn: allMatchPageExecutor
}

// .ds-p-4.hover:ds-bg-ui-fill-translucent.ds-border-t.ds-border-line
// https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/chennai-super-kings-vs-kolkata-knight-riders-1st-match-1304047/full-scorecard
// .ds-grow.ds-px-4.ds-border-r.ds-border-line-default-translucent
//.ds-flex .ds-no-tap-higlight