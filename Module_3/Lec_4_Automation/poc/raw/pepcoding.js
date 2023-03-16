// control browser
// controls a headless browser
const puppeteer = require("puppeteer");
// nearly every fuction of puppeteer return a promise
// flaviocopes.com/puppeteer/ 

async function fn() {
    let browserRepresentativeObj = await puppeteer.launch({
        headless: false
    });
    // open new tab 
    let tab = await browserRepresentativeObj.newPage();
    // to go google home page
    await tab.goto("https://www.google.com");
    // type
    await tab.type("input[type='text']","pepcoding", {delay : 200});
    // to press a specific key
    await tab.keyboard.press("Enter");

}

fn();