const request = require('request');
const fs = require('fs');
const jsdom = require('jsdom');
const path = require("path");
const helperObj = require('./helper');

function scorecardPageExecutor(url) {
    request(url, cb);
}

function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message);
    } else if (response && response.statusCode == 404) {
        console.log("Page not found");
    } else {
        // console.log("content recieved");
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
    // result
    let AllMatch = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-truncate.ds-text-typo");
    let res = AllMatch[0].textContent;
    // Vanue
    let AllMtchVanue = document.querySelectorAll(".ds-text-tight-m.ds-font-regular.ds-text-typo-mid3");
    let vanue = AllMtchVanue[0].textContent;
    //team name
    let TeamNameElem = document.querySelectorAll(".ds-text-title-xs.ds-font-bold.ds-capitalize");
    let firstTeam = TeamNameElem[0].textContent; 
    let secondTeam = TeamNameElem[1].textContent; 

    //
    let TeamStatsElem = document.querySelectorAll(".ds-w-full.ds-table.ds-table-md.ds-table-auto.ci-scorecard-table");
    // let HtmlString = "" + "<table>" + TeamStatsElem[0].innerHTML + "<table/>";
    // + "<table>" + TeamStatsElem[1].innerHTML + "</table>";
    // fs.writeFileSync("firstTeam.html", HtmlString);
    // console.log("file created");

    let firstBattingTeam = TeamStatsElem[0];
    let secondBattingTeam = TeamStatsElem[1];
    console.log(firstTeam + " Player Stats");
    processTeam(firstBattingTeam,firstTeam,vanue,secondTeam,res);
    console.log(secondTeam + " Player Stats");
    processTeam(secondBattingTeam,secondTeam,vanue,firstTeam,res);


}

function processTeam(Teamstats,TeamName,vanue,against,result) {
    let TotalRow = Teamstats.querySelectorAll("tbody tr");
    for (let i = 0; i < TotalRow.length; i++) {
        let cols = TotalRow[i].querySelectorAll("td");
        if (cols.length == 8) {
            let name = cols[0].textContent.trim();
            let Run = cols[2].textContent;
            let Balls = cols[3].textContent;
            let fours = cols[5].textContent;
            let sixs = cols[6].textContent;
            let sr = cols[7].textContent;
            // console.log("");
            // console.log(name + " team " + TeamName + " against " + against);
            // console.log("vanue " + vanue);
            // console.log("name-> " + name + " Run-> " + Run + " Balls-> " + Balls + " fours-> " + fours + " sixs-> " + sixs + " sr-> " + sr);
            let dataObj = {
                name, Run, Balls, fours, sixs, sr, against, result, vanue
            }
            dataOrganizer(TeamName,name,dataObj);
        }
    }
    console.log(" ");

}

function dataOrganizer(TeamName,PlayerName,dataObj) {

    // folder will not be present
    // folder will be present
    const teamPath = path.join(__dirname,"ipl", TeamName);
    helperObj.dirCreater(teamPath);
    // file will be not present
    const playerPath = path.join(teamPath,PlayerName + ".json");
    helperObj.fileHandler(playerPath, dataObj);

}

module.exports= {
    scorecardFn: scorecardPageExecutor
}