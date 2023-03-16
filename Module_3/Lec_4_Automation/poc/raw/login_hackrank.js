const puppeteer = require("puppeteer");
// nearly every fuction of puppeteer return a promise
// flaviocopes.com/puppeteer/
// pptr.dev  

async function fn() {
    let browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        arge: ["--start-maximized"],
        slowMo:100
    });
    // open new tab 
    let tab = await browserRepresentativeObj.newPage();
    await tab.setViewport({ width: 0, height: 0});
    // to go google home page
    await tab.goto("https://www.hackerrank.com/auth/login");
    // type email id
    await tab.type("input[type='text']","pahod48470@asoflex.com", {delay : 200});
    //type password
    await tab.type("input[type='password']","asdfghjkl", {delay : 200});
    // click login button
    await tab.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled",{delay: 200});
}

fn();