const fs = require("node:fs")



console.log("Node runtime basics")
console.log("Node version: ", process.version)
console.log("Operating System : ", process.platform)
console.log("Current Directory : ", process.cwd())

console.log("Arguments: ", process.argv);




const useName = process.argv[2] || "Guest"
console.log(useName);


// ENV
const userInputedName = process.env.USER_NAME || "Default"
console.log(userInputedName)

const appName = process.env.APP_NAME || "nam Nai";
console.log(appName);


// file system
// Create new file with content: 
fs.writeFileSync("message.txt", "Hello Node.JS")
console.log("File Created");

// Add content to exiting file
fs.appendFileSync("message.txt", "\nI am learning Node.JS");


// Read File
const content = fs.readFileSync("message.txt", "utf8");
console.log(content);

fs.unlinkSync("message.txt")



