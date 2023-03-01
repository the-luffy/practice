let fs = require("fs");
// console.log("before");
// //file -> read,write,create,delete,append,copy
// //crud means->create,read,update,delete
// // let content = fs.readFileSync("readme.txt","utf8");
// // console.log(content);
// //creation
// fs.writeFileSync("newfile.txt","");
// //write -> create ac file the content into it /
// //if file already exist -> replace content
// // fs.writeFileSync("newfile.txt","I have done something");
// fs.writeFileSync("newfile.txt","I have done something more");
// //append
// fs.appendFileSync("newfile.txt"," I have append somthing");
// //delete
// // fs.unlinkSync("readme.txt");
// console.log("After");

//create
// fs.mkdirSync("newFolder4");
// fs.mkdirSync("newFolder");

//delete
// fs.rmdirSync("newFolder");
// fs.rmdirSync("newFolder3");
// fs.rmdirSync("newFolder4");

// //file and folder -> get
// let content = fs.readdirSync("C:\\Users\\user\\OneDrive\\Desktop\\learn js\\L_1");
// console.log(content);

let randomPath = "C:\\Users\\user\\OneDrive\\Desktop\\learn js\\L_2\\input.js";
let isFile = fs.lstatSync(randomPath).isFile();
let isDirectory = fs.lstatSync(randomPath).isDirectory();
console.log("path belongs to file: ",isFile, " folder : ",isDirectory);
