let path = require("path");
let fs = require("fs");
let modules = ["Javascript","Browser","React","Backend","Git"];
//path build
let webDevDirPath = path.join(process.cwd(),"web dev");



// does this path exists
if (fs.existsSync(webDevDirPath)) {
    // i don't need to create it
    console.log("Web dev folder already exists");
} else {
    fs.mkdirSync(webDevDirPath);
}

// create all the module inside these
for (let i = 0; i < modules.length; i++) {
    let modulePath = path.join(webDevDirPath, modules[i]);
    if(fs.existsSync(modulePath)) {
        console.log(modules[i], "already exist");
    } else {
        fs.mkdirSync(modulePath);
    }
}