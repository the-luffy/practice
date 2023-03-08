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

function fileHandler(inputPath) {
    let isFilePresent = fs.existsSync(inputPath);

    if (isFilePresent == false) {
        fileCreater(inputPath);
    } else {
        fileUpdater(inputPath);
    }
}

function fileCreater(playerPath) {
    fs.writeFileSync(playerPath, "");

}

function fileUpdater(playerPath) {
    console.log("entry updated", path.basename(playerPath));
}

module.exports = {
    dirCreater: dirCreater,
    fileHandler: fileHandler
}