// control browser
// controls a headless browser -> browser that is by default not visible
const puppeteer = require("puppeteer");
// nearly every fuction of puppeteer return a promise
// flaviocopes.com/puppeteer/
// pptr.dev  

async function fn() {
    let browserRepresentativeObj = await puppeteer.launch({
        headless: false,
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        defaultViewport: null,
        arge: ["--start-maximized","--start-in-incognito"],
        slowMo:100
    });
    // open new tab 
    let tab = await browserRepresentativeObj.newPage();
    await tab.setViewport({ width: 0, height: 0});
    // to go google home page
    await tab.goto("https://www.google.com");
    // type text
    await tab.type("input[type='text']","pepcoding", {delay : 200});
    // to press a specific key
    await tab.keyboard.press("Enter");
    // page change error prevent -> to wait for selector tha tis present on the second page
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md", {visible: true});
    // click
    await tab.click(".LC20lb.MBeuO.DKV0Md",{delay: 200});
}

fn();
// .LC20lb.MBeuO.DKV0Md