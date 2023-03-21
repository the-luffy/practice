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
        arge: ["--start-maximized", "--start-in-incognito"],
        slowMo: 100
    });
    // open new tab 
    let tab = await browserRepresentativeObj.newPage();
    await tab.setViewport({ width: 0, height: 0 });
    // to go google home page
    await tab.goto("https://www.google.com");
    // type text
    await tab.type("input[type='text']", "pepcoding", { delay: 200 });
    // to press a specific key
    await tab.keyboard.press("Enter");
    // page change error prevent -> to wait for selector tha tis present on the second page
    await tab.waitForSelector(".LC20lb.MBeuO.DKV0Md", { visible: true });
    // click
    await tab.click(".LC20lb.MBeuO.DKV0Md", { delay: 200 });
    await tab.waitForSelector(".site-nav-li", { visible: true });
    await tab.click(".site-nav-li");
    await tab.waitForSelector(".row.fade.active", { visible: true });

    let courseNames = await tab.evaluate(fun);
    function fun() {
        let elemArr = document.querySelectorAll("#courses .card.course-tile.card-cs.rounded-border");
        let detailArr = [];
        for(let j = 0; j < elemArr.length; j++) {
            let singleCard = elemArr[j];
            let courseNameElem = singleCard.querySelector("h3");
            let dateElem = singleCard.querySelector(".date");
            let featureArr = singleCard.querySelectorAll("h5");
    
            let courseName = courseNameElem.textContent.trim();
            let date = dateElem.textContent.trim();
    
            let feature = "";
            for(let i = 0; i < featureArr.length; i++){
                let featureElem = featureArr[i].textContent.trim();
                feature += featureElem + "/n";
            }
            let priceArr = singleCard.querySelectorAll(".cart-sec h4");
            // let price = priceArr[1].textContent.trim();
            let price;
            console.log(priceArr.length);
            if(priceArr.length == 1) {
                price = priceArr[0].textContent.trim();
            } else {
                price = priceArr[1].textContent.trim();
            }
            let courseObj = {
                courseName, date, feature, price
            }
            detailArr.push(courseObj);

        }
        return detailArr;

    }
    console.table(courseNames);
}


fn();
// .LC20lb.MBeuO.DKV0Md