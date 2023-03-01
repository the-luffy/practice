const request = require('request');
const fs = require('fs'); 
let url = "http://www.google.com";

// request working->
//1. request to the given url;
//2. response -> request function -> data put

request(url, cb);

// error -> if there is any error while executing the request
// response -> header + body
// body -> html
console.log('Before');
function cb(error, response, body) {
    //   console.log('error:', error); // Print the error if one occurred
    //   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //   console.log('body:', body); // Print the HTML for the Google homepage.
    
    if (error) {
        console.log('error:', error.message); // Print the error message
    }else if(response && response.statusCode == 404){
        console.log("Page not found");
    }else {
        console.log('body:',body);// Print the HTML for the Google homepage.
        fs.writeFileSync("index.html",body);
    }
}
console.log('After'); 
