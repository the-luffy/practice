// control browser
// controls a headless browser
const puppeteer = require("puppeteer");
// nearly every fuction of puppeteer return a promise
// flaviocopes.com/puppeteer/ 

async function fn() {
    let browserRepresentativeObj = await puppeteer.launch({
        headless: false
    });
    // tab 
    let tab = await browserRepresentativeObj.newPage();
    await tab.goto("https://www.google.com");

}

fn();