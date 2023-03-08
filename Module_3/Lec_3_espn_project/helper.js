const fs = require("fs");
const path = require('path');
function dirCreater(inputPath) {
    let isPresent = fs.existsSync(inputPath);
    if (isPresent == false) {
        fs.mkdirSync(inputPath);
    }
    else {
        console.log(inputPath," already present ");
    }
}

function fileHandler(inputPath,dataObj) {
    let isFilePresent = fs.existsSync(inputPath);

    if (isFilePresent == false) {
        fileCreater(inputPath), dataObj;
    } else {
        fileUpdater(inputPath, dataObj);
    }
}

function fileCreater(playerPath,dataObj) {
    let arr = [dataObj];
    fs.writeFileSync(playerPath, JSON.stringify(arr));

}

function fileUpdater(playerPath,dataObj) {
    let dataBuffer = fs.readFileSync(playerPath);
    let arr = JSON.parse(dataBuffer);
    arr.push(dataObj);
    fs.writeFileSync(playerPath, JSON.stringify(arr));
}

module.exports = {
    dirCreater: dirCreater,
    fileHandler: fileHandler
}