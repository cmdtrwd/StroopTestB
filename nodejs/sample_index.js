// Call back function

// function AddValues(x,y, callback){
//     console.log("calculating...");
//     setTimeout(()=>{
//         const sum = x + y;
//         callback(sum);
//     }, 3000);
// }

// function Display(result){
//     console.log('sum = ' + result);
// }

// AddValues(100, 50, Display);


// Promise

// const connect = false; // Check if there is an Internet connection
// const url1 = "myserver.com/fileA.json";

// function Downloading(url){
//     return new Promise(function(resolve, reject){   
//         console.log("Downloading " + url)     ;
//         setTimeout(()=>{
//             if (connect){
//                 resolve("Successfully downloaded " + url);            
//             }
//             else{
//                 reject("Something went wrong");
//             }
//         }, 1000);
//     });
// }

// Downloading(url1).then(result=>{
//     console.log(result);
// }).catch(err=>{
//     console.log(err);
// }).finally(()=>{
//     console.log("end of process");
// });

// Async & Await
const connect = true; // Check if there is an Internet connection
const url1 = "myserver.com/fileA.json";
const url2 = "myserver.com/fileB.json";
const url3 = "myserver.com/fileC.json";

function Downloading(url) {
    return new Promise(function (resolve, reject) {
        console.log("Downloading " + url);
        setTimeout(() => {
            if (connect) {
                resolve("Successfully downloaded " + url);
            }
            else {
                reject("Something went wrong");
            }
        }, 1000);
    });
}

async function Start() {
    console.log(await Downloading(url1));
    console.log(await Downloading(url2));
    // await Downloading(url3);
}

Start();

// Import modules
const moduleA = require('./modules/mymodule');

console.log(moduleA.GetCurrentTime());
moduleA.Reset();
moduleA.Start();
setTimeout(() => {
    moduleA.Stop();
    console.log(moduleA.GetDuration());
}, 3000);


const moduleExcel = require('./modules/workingwithexcel');

moduleExcel.InsertData();

// Import I/O module
const fs = require('fs');

// Set the base file name and extension
const baseFileName = "result";
const extension = ".txt";

// Set the initial file number
let fileNumber = 1;

// Loop until a unique file name is found
while (fs.existsSync(`output/${baseFileName}_${fileNumber}${extension}`)){
    fileNumber++;
}

//construct the file name
const fileName = `output/${baseFileName}_${fileNumber}${extension}`;

// Read Data
fs.readFile("input/data.txt", "utf-8", (err, data) => {
    if (err) {
        return console.log("Something went wrong when reading data");
    }
    console.log(data);
});

// Write Data
const outputText = "Hello test test again" + moduleA.GetDuration();
fs.writeFileSync(fileName, outputText);
console.log("file is created!");

// Import path module
const path = require('path');

// Import http module
const http = require('http');

// Import URL module
const url_m = require('url');

// Import express module (After installing express module using npm)
const express = require('express');
const app = express();

// Serve static files from the "public" directory
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send(`
    <!doctype html>
    <html>
      <head>
        <link rel="stylesheet" href="/style.css">
      </head>
      <body>
        <h1>Hello, world!</h1>
      </body>
    </html>
  `);
});

// using path module to get a response from a defined path

const savePage = path.join(__dirname, '../templates/filesaved.html');

app.get('/home', function (req, res) {
    res.status(200);
    res.type('text/html');
    res.sendFile(savePage);
});

app.listen(3000, function(){
    console.log("Server is listening on port 3000");
})


// http.createServer(function (req, res) {
//     // res.setHeader('Content-Type', 'text/html'); // set content type header
//     // res.write("<p>Server is created</p>");         //Send a response to a request

//     // Parse the URL from the request using URL module
//     const parseURL = url_m.parse(req.url, true);
    
//     // Parse the pathname from the url
//     const pathname = parseURL.pathname;
//     // res.write("path: " + pathname);

    
//     // use path.dirname on __dirname to get the root directory
//     const rootDir = path.dirname(__dirname);
//     console.log("dir: " + path.dirname(__dirname));
    
//     // Read the data from HTML template
//     const savePage = fs.readFileSync(rootDir + "/savefile.html", "utf-8");
    
    
//     if (pathname === "/save") {
//         // Use JSON.stringify() to convert JSON format to string
//         console.log("url: " + JSON.stringify(parseURL.query));

//         res.end(savePage);
//     }
//     else if (pathname === "/product") {
//         res.write("<h2>Product page</h2>");
//         res.end();
//     }
//     else {
//         // res.writeHead(404);
//         res.write("<h2>Not Found</h2>");


//         fs.readFile("input/data.txt", "utf-8", (err, data) => {
//             if (err) {
//                 res.end("Something went wrong when reading data", err);
//             }
//             const myresponse = "<h1>" + data + "</h1>" +
//                 "<p>Eng Studio</p>"
//             // res.write("<h1>" + data +"<h1>");   //Send a response to a request
//             res.write(myresponse);   //Send a response to a request
//             res.end("end my response");                          //End a response
//         });
//     }

// }).listen(3000, 'localhost', () => {
//     // Assign a port to listen to request
//     console.log("Start server at the port 3000");
// });
