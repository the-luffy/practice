const request = require('request');
const fs = require('fs'); 
const jsdom = require('jsdom');
let url = "https://www.espncricinfo.com/series/indian-premier-league-2022-1298423/kolkata-knight-riders-vs-lucknow-super-giants-66th-match-1304112/full-scorecard";

// request working->
//1. request to the given url;
//2. response -> request function -> data put

request(url, cb);

// error -> if there is any error while executing the request
// response -> header + body
// body -> html
console.log('Before');
function cb(error, response, body) {
    if (error) {
        console.log('error:', error.message); // Print the error message
    }else if(response && response.statusCode == 404){
        console.log("Page not found");
    }else {
        // console.log('body:',body);// Print the HTML for the Google homepage.
        // fs.writeFileSync("index.html",body);
        console.log("content recieved");
        extractData(body);
    }
}

function extractData(html) {
    const JSDOM = jsdom.JSDOM;//no meaning
    //1. string form me -> html content provide
    // pass to newJSDOM
    let dom = new JSDOM(html);
    // 2. no meaning
    let document = dom.window.document;
    let firstButton = document.querySelectorAll(".lsb");
    let content = firstButton[0].value;
    console.log("content:",content);
    let AllAnchor = document.querySelectorAll("#SIvCob a");
    console.log("Google search is offered in these language");
    for (let i = 0; i < AllAnchor.length; i++)
    {
        let content = AllAnchor[i].textContent;
        console.log("languages:",content);
    }
    // console.log("Google search is offered in these language");
    // for (let i = 0; i < AllAnchor2.length; i++)
    // {
        //     console.log("result:",content);
        // }
        let AllAnchor2 = document.querySelectorAll("#WqQANb a");
        let Content = AllAnchor2[2].textContent;
        console.log(Content);

        
}

console.log('After'); 
